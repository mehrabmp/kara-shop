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
  const { data, isLoading } = trpc.useQuery(['collection.all']);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul>
      {data?.map(collection => (
        <li key={collection.id}>
          <h3>{collection.title}</h3>
          <ul>
            {collection.subCollections.map(subCollection => (
              <li key={subCollection.id}>
                {subCollection.title} --------- {subCollection.type} -----------{' '}
                {subCollection.createdAt.toLocaleDateString()}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout title="Kara Shop" description="Home page of Kara Shop">
      {page}
    </PrimaryLayout>
  );
};

export default Home;
