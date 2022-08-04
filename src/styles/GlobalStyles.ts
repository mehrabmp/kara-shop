import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.2s;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.neutral90};
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: normal;
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  
  input, Button {
    font-family: ${({ theme }) => theme.fontFamily};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.25rem;
    border: none;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  } 

  #nprogress .bar {
    background: ${({ theme }) => theme.colors.primary80} !important;
    height: 3px !important;
  }
`;

export default GlobalStyles;
