import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/Theme';
import { appWithTranslation } from 'next-i18next';
import { withTRPC } from '@trpc/next';
import { AppRouter } from 'server/routers/_app';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
// import { SSRContext } from 'utils/trpc';
import superjson from 'superjson';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import GlobalStyles from 'styles/GlobalStyles';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
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

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // // reference for render.com
  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: opts =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
  /**
   * Set headers or status code when doing SSR
   */
  // responseMeta(opts) {
  //   const ctx = opts.ctx as SSRContext;

  //   if (ctx.status) {
  //     // If HTTP status set, propagate that
  //     return {
  //       status: ctx.status,
  //     };
  //   }

  //   const error = opts.clientErrors[0];
  //   if (error) {
  //     // Propagate http first error from API calls
  //     return {
  //       status: error.data?.httpStatus ?? 500,
  //     };
  //   }
  //   // For app caching with SSR see https://trpc.io/docs/caching
  //   return {};
  // },
})(appWithTranslation(MyApp));
