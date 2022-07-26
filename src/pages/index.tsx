import type { NextPage } from 'next';
import styled from 'styled-components';
import { TopBar } from 'components';

const Home: NextPage = () => {
  return (
    <Container>
      <TopBar></TopBar>
    </Container>
  );
};

export default Home;

const Container = styled.div``;
