import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrimaryLayout } from 'components';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  };
};

const Home: NextPageWithLayout = () => {
  return <h1></h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout title="Kara Shop" description="Home page of Kara Shop">
      {page}
    </PrimaryLayout>
  );
};

export default Home;
