import type { GetStaticPathsResult, GetStaticProps } from 'next';
import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navigation, ProductsList } from '@/components';
import { Pagination } from '@/components/ui';
import { PrimaryLayout } from '@/layouts';
import { CollectionType, ProductColor, ProductSize } from '@prisma/client';
import { api } from '@/utils/api';

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
  const utils = api.useContext();

  const {
    slug,
    rate,
    page = 1,
    price,
    sizes,
    colors,
  } = router.query as {
    slug: string[] | undefined;
    rate: number | undefined;
    page: number | undefined;
    price: string | undefined;
    sizes: string | string[] | undefined;
    colors: string | string[] | undefined;
  };

  const queryInput = useMemo(
    () => ({
      types: slug && (slug[0].toUpperCase() as CollectionType),
      slug: slug && slug[1],
      sizes: [sizes].flat(1).filter(Boolean) as ProductSize[],
      colors: [colors].flat(1).filter(Boolean) as ProductColor[],
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
    }),
    [colors, page, price, rate, sizes, slug]
  );

  const { data, isLoading, isPreviousData } =
    api.product.all.useQuery(queryInput);

  const pageSize = 12;

  useEffect(() => {
    if (data) {
      const totalPageCount = Math.ceil(data.totalCount / pageSize);
      if (!isPreviousData && totalPageCount > Number(page)) {
        utils.product.all.prefetch({ ...queryInput, page: Number(page) + 1 });
      }
    }
  }, [data, page, isPreviousData, queryInput, utils]);

  return (
    <div className="mx-auto items-center p-4 xl:container">
      <div className="flex gap-5">
        <div className="hidden flex-1 md:block">
          <Navigation />
        </div>
        <div className="flex-[5]">
          <ProductsList products={data?.products} isLoading={isLoading} />
          <div className="flex justify-center py-5">
            <Pagination
              totalCount={data?.totalCount}
              currentPage={Number(page)}
              pageSize={pageSize}
              onPageChange={page =>
                router.push({ query: { ...router.query, page } }, undefined, {
                  shallow: true,
                  scroll: true,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Products',
        description: 'Products',
        canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Products;
