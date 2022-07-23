import type { NextPage } from 'next';
import styled from 'styled-components';
import useDarkMode from 'hooks/useDarkMode';
import { useEffect, useState } from 'react';
import { Button } from 'components';

const Home: NextPage = () => {
  const { isDarkMode, toggle } = useDarkMode(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <Container>
      <h1>Its test</h1>
      <Button label={darkMode ? 'Light mode' : 'Dark mode'} onClick={toggle} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 1rem;
`;
