import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { ComposerFormControls } from "../../../components/composerFormControls";
import { ComposerRecipientEntry } from "../../../components/composerRecipientEntry";
import { SplitLayout } from "../../../layouts/splitLayout";
import { prisma } from "../../../server/prisma";
import { ComposerFormStore } from "../../../store/composerFormStore";
import { ComposerFrontendModel } from "../../../types/frontendModels";

interface Props {
  composer: ComposerFrontendModel;
  page: number;
}

const Compose: NextPage<Props> = ({ composer, page }) => {
  const [composerFormStore] = useState(() => new ComposerFormStore(composer));

  const recipient = composer.recipients[page - 1];

  const main = (
    <div>
      <ComposerRecipientEntry
        recipient={recipient}
        composerFormStore={composerFormStore}
      />
      <ComposerFormControls
        composer={composer}
        page={page}
        composerFormStore={composerFormStore}
      />
    </div>
  );

  return <SplitLayout sidebar={<p>sidebar</p>} main={main} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const composerId = context.query.composerId as string;
  const pageStr = context.query.page as string;

  const dbComposer = await prisma.composer.findUnique({
    where: { id: composerId },
    include: {
      recipients: {
        include: {
          occasions: true,
        },
      },
    },
  });

  if (!dbComposer) {
    return {
      notFound: true,
    };
  }

  const page = Number(pageStr);

  if (isNaN(page) || page < 1 || page > dbComposer.recipients.length) {
    return {
      redirect: {
        destination: `/compose/${composerId}/1`,
        permanent: false,
      },
    };
  }

  const composer: ComposerFrontendModel = {
    id: dbComposer.id,
    name: dbComposer.name,
    proxyName: dbComposer.proxyName,
    recipients: dbComposer.recipients.map((recipient) => ({
      id: recipient.id,
      name: recipient.name,
      email: recipient.email,
      phone: recipient.phone,
      composerName: dbComposer.name,
      occasions: recipient.occasions.map((occasion) => ({
        id: occasion.id,
        label: occasion.label,
        date: occasion.date.toISOString(),
        message: occasion.message,
      })),
    })),
  };

  return {
    props: { composer, page },
  };
};

export default Compose;
