import { GetServerSideProps, NextPage } from "next";
import { RecipientFormControls } from "../../../components/recipientFormControls";
import { RecipientOccasionEntry } from "../../../components/recipientOccasionEntry";
import { SplitLayout } from "../../../layouts/splitLayout";
import { prisma } from "../../../server/prisma";
import { RecipientFrontendModel } from "../../../types/frontendModels";

interface Props {
  recipient: RecipientFrontendModel;
  page: number;
}

const Compose: NextPage<Props> = ({ recipient, page }) => {
  const occasion = recipient.occasions[page - 1];

  const main = (
    <div>
      <h1>Hello, {recipient.name}</h1>
      <h2>Messages from {recipient.composerName}</h2>
      <RecipientOccasionEntry occasion={occasion} />
      <RecipientFormControls recipient={recipient} page={page} />
    </div>
  );

  return <SplitLayout sidebar={<p>sidebar</p>} main={main} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const recipientId = context.query.recipientId as string;
  const pageStr = context.query.page as string;

  const dbRecipient = await prisma.recipient.findUnique({
    where: { id: recipientId },
    include: {
      composer: true,
      occasions: true,
    },
  });

  if (!dbRecipient) {
    return {
      notFound: true,
    };
  }

  const page = Number(pageStr);

  if (isNaN(page) || page < 1 || page > dbRecipient.occasions.length) {
    return {
      redirect: {
        destination: `/view/${recipientId}/1`,
        permanent: false,
      },
    };
  }

  // const now = new Date().getTime();
  const now = 0; // TODO revert

  const occasions = dbRecipient.occasions
    .filter((occasion) => occasion.date.getTime() > now)
    .map((occasion) => ({
      id: occasion.id,
      label: occasion.label,
      date: occasion.date.toISOString(),
      message: occasion.message,
    }));

  const recipient: RecipientFrontendModel = {
    id: dbRecipient.id,
    name: dbRecipient.name,
    email: dbRecipient.email,
    phone: dbRecipient.phone,
    composerName: dbRecipient.composer.name,
    occasions,
  };

  return {
    props: { recipient, page },
  };
};

export default Compose;
