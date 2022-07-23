import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/Theme';
import GlobalStyles from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
