import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navigation, PrimaryLayout, ProductsList } from 'components';
import { trpc } from 'utils/trpc';
import { prisma } from 'server/db/prisma';

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collections = await prisma.collection.findMany({
    select: {
      slug: true,
      subCollections: {
        select: {
          slug: true,
          type: true,
        },
      },
    },
  });

  const locales = ['en', 'de'];

  const paths: {
    locale: string;
    params: {
      slug: string[];
    };
  }[] = [];

  locales.map(locale => {
    paths.push({ params: { slug: ['men'] }, locale });
    paths.push({ params: { slug: ['women'] }, locale });

    collections.map(col => {
      paths.push({ params: { slug: ['men', col.slug] }, locale });
      paths.push({ params: { slug: ['women', col.slug] }, locale });
      col.subCollections.map(subCol =>
        subCol.type.map(t =>
          paths.push({
            params: { slug: [t.toString().toLowerCase(), subCol.slug] },
            locale,
          })
        )
      );
    });
  });

  return { paths, fallback: false };
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
      description="Products page of Kara Shop"
    >
      {page}
    </PrimaryLayout>
  );
};

export default Products;
