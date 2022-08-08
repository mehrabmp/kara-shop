import { css } from 'styled-components';

const TransitionStyles = css`
  /* Fade down */
  .fadedown-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms, transform 200ms;
  }
  .fadedown-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .fadedown-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 200ms, transform 200ms;
  }
`;

export default TransitionStyles;
