import type { NextPage } from 'next';
import styled from 'styled-components';
import useDarkMode from 'hooks/useDarkMode';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const { isDarkMode, toggle } = useDarkMode(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <Container>
      <h1>Its test</h1>
      <Button onClick={toggle}>{darkMode ? 'Light mode' : 'Dark mode'}</Button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 1rem;
`;

const Button = styled.button`
  background: red;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
`;
