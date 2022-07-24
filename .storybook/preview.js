import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import { lightTheme } from '../src/styles/Theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
