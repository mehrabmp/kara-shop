import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/Theme';
import GlobalStyles from 'styles/GlobalStyles';
import useDarkMode from 'hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useDarkMode(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
