import type { GetStaticPathsResult, GetStaticProps } from 'next';
import { ReactElement, useEffect, useMemo } from 'react';
import type { NextPageWithLayout } from '../_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Navigation,
  Pagination,
  PrimaryLayout,
  ProductsList,
} from 'components';
import { api } from 'utils/api';
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
  const utils = api.useContext();

  const {
    slug,
    rate,
    page = 1,
    price,
    size,
    color,
  } = router.query as {
    slug: string[] | undefined;
    rate: number | undefined;
    page: number | undefined;
    price: string | undefined;
    size: string | string[] | undefined;
    color: string | string[] | undefined;
  };

  const queryInput = useMemo(
    () => ({
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
    }),
    [color, page, price, rate, size, slug]
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
        <div className="flex-[5] rounded-lg bg-white">
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
      title="Products | Kara Shop"
      description="Products page of Kara Shop"
    >
      {page}
    </PrimaryLayout>
  );
};

export default Products;
