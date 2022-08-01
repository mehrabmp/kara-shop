import { css } from 'styled-components';

const Fonts = css`
  @font-face {
    font-family: 'Blanka';
    src: url('assets/fonts/Blanka-Regular.eot');
    src: url('assets/fonts/Blanka-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('assets/fonts/Blanka-Regular.woff2') format('woff2'),
      url('assets/fonts/Blanka-Regular.woff') format('woff'),
      url('assets/fonts/Blanka-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default Fonts;
