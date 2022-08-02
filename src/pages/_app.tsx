import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/Theme';
import GlobalStyles from 'styles/GlobalStyles';
// import useDarkMode from 'hooks/useDarkMode';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const { isDarkMode } = useDarkMode(false);
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
