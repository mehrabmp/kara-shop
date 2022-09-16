import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrimaryLayout } from 'components';
import { trpc } from 'utils/trpc';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  };
};

const Home: NextPageWithLayout = () => {
  const { data, isLoading } = trpc.useQuery(['healthz']);

  if (isLoading) return <h1>Loading...</h1>;

  return <h1>{data}</h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout title="Kara Shop" description="Home page of Kara Shop">
      {page}
    </PrimaryLayout>
  );
};

export default Home;
