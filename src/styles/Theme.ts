const defaultTheme = {
  fontFamily: 'Noto Sans, sans-serif',
  borderRadius: '10px',
  boxShadow:
    'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
  colors: {
    primary: '#3A76FE',
    secondary: '#222222',
  },
  fontSizes: {
    body: '1.6rem',
    h1: '2rem',
    h2: '1.8rem',
  },
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    body: '#F5F5F5',
    card: '#FFFFFF',
  },
  text: {
    primary100: '#1C1C1C',
    primary200: '#585757',
    primary300: '#969696',
    primary400: '#E8E8E8',
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    body: '#222831',
    card: '#393E46',
  },
  text: {
    primary100: 'rgba(255, 255, 255, 0.9)',
    primary200: 'rgba(255, 255, 255, 0.7)',
    primary300: 'rgba(255, 255, 255, 0.4)',
    primary400: 'rgba(255, 255, 255, 0.1)',
  },
};
