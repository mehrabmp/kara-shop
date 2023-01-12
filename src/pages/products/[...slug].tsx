import type { GetStaticPathsResult, GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navigation, PrimaryLayout, ProductsList } from 'components';
import { trpc } from 'utils/trpc';
import { useRouter } from 'next/router';
import { ProductColor, ProductSize } from '@prisma/client';

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string)),
    },
  };
};

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

const Products: NextPageWithLayout = () => {
  const router = useRouter();

  const { rate, page, gte, lte, size, color } = router.query;

  const sizes = size
    ? ([size].flat(1).filter(Boolean) as ProductSize[])
    : undefined;
  const colors = color
    ? ([color].flat(1).filter(Boolean) as ProductColor[])
    : undefined;

  const productsQuery = trpc.product.all.useQuery({
    page: Number(page) || undefined,
    rate: Number(rate) || undefined,
    gte: Number(gte) || undefined,
    lte: Number(lte) || undefined,
    size: sizes,
    color: colors,
  });

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
      description="Products page of Kara Shop"
    >
      {page}
    </PrimaryLayout>
  );
};

export default Products;
