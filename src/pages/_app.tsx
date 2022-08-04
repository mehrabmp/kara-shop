import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/Theme';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
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

  NProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
