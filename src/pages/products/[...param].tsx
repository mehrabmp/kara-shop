import type { GetServerSideProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navigation, PrimaryLayout, ProductsList } from 'components';
import { trpc } from 'utils/trpc';

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const Products: NextPageWithLayout = () => {
  const productsQuery = trpc.product.all.useQuery({});

  return (
    <div className="mx-auto items-center p-4 xl:container">
      <div className="flex gap-5">
        <div className="hidden flex-1 md:block">
          <Navigation />
        </div>
        <div className="flex-[5]">
          {productsQuery.isLoading && <p>Loading...</p>}
          {productsQuery.isError && <p>Error: {productsQuery.error.message}</p>}
          {productsQuery.isSuccess && (
            <ProductsList products={productsQuery.data} />
          )}
        </div>
      </div>
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      title="Products | Kara Shop"
      description="Home page of Kara Shop"
    >
      {page}
    </PrimaryLayout>
  );
};

export default Products;
