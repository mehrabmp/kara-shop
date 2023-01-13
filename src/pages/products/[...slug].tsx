import type { GetStaticPathsResult, GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navigation, PrimaryLayout, ProductsList } from 'components';
import { trpc } from 'utils/trpc';
import { useRouter } from 'next/router';
import { CollectionType, ProductColor, ProductSize } from '@prisma/client';

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

  const { slug, rate, page, price, size, color } = router.query as {
    slug: string[] | undefined;
    rate: number | undefined;
    page: number | undefined;
    price: string | undefined;
    size: string | string[] | undefined;
    color: string | string[] | undefined;
  };

  const productsQuery = trpc.product.all.useQuery({
    type: slug && (slug[0].toUpperCase() as CollectionType),
    slug: slug && slug[1],
    size: [size].flat(1).filter(Boolean) as ProductSize[],
    color: [color].flat(1).filter(Boolean) as ProductColor[],
    page: page && Number(page),
    rate: rate && Number(rate),
    gte: price ? (price === '$' ? 0 : price === '$$' ? 10 : 100) : undefined,
    lte: price
      ? price === '$'
        ? 10
        : price === '$$'
        ? 100
        : 1000000
      : undefined,
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
