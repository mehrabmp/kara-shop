import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import styled from 'styled-components';
import { PrimaryLayout } from 'components';

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
