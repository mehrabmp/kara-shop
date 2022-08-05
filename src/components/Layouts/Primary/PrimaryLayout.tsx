import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Header, Footer } from 'components';

interface PrimaryLayoutProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  url?: string;
  image?: string;
}

export const PrimaryLayout = ({
  children,
  title = 'Kara Shop',
  description = 'Kara Shop - Ecommerce created by NextJS, TypeScript',
  keywords = 'ecommerce, shop',
  type = 'website',
  url = 'https://karashop.vercel.app',
  image,
}: PrimaryLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="noindex,nofollow" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <main>{children}</main>
      </Layout>
      <Footer />
    </>
  );
};

const Layout = styled.div`
  min-height: 100vh;
`;
