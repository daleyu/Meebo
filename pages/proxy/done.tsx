import { GetServerSideProps, NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";
import { useRouter } from "next/router";
import { SplitLayout } from "../../layouts/splitLayout";

interface Props {
  origin: string;
}

const Done: NextPage<Props> = ({ origin }) => {
  const router = useRouter();

  const { composerName, composerId } = router.query;

  const composeUrl = `${origin}/compose/${composerId}`;

  const main = (
    <div>
      <h1>Done!</h1>
      <h2>Composer name: {composerName}</h2>
      <h2>Link:</h2>
      <Link href={composeUrl}>{composeUrl}</Link>
    </div>
  );

  return <SplitLayout sidebar={<></>} main={main} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { origin } = absoluteUrl(context.req);

  return {
    props: { origin },
  };
};

export default Done;
