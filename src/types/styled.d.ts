import { lightTheme } from 'styles/Theme';

type Theme = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
