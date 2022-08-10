import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';

const GlobalStyles = createGlobalStyle`
  ${TransitionStyles}

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

    @media (max-width: 900px) {
      font-size: 1.4rem;
    }
  }
  
  input, Button {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: inherit;
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

  /* Width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyles;
