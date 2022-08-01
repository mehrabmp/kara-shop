const defaultTheme = {
  fontFamily: 'Noto Sans, sans-serif',
  borderRadius: '10px',
  containerWidth: '1500px',
  boxShadow:
    'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
  colors: {
    primary100: '#614FE0', // Primary default
    primary10: '#EFEDFC', // Tertiary surface,
    primary20: '#D3CEF6', // Divider tertiary surface,
    primary40: '#B6AEF1',
    primary60: '#9A8EEB', // Primary over dark surfaces,
    primary80: '#7D6FE6',
    primary120: '#5041B8',
    primary140: '#3E338F', // Button container pressed,
    primary160: '#2D2467',
    primary180: '#1B163F',
    primary190: '#0A0816',
    secondary100: '#E23E57', // Secondary default
    secondary10: '#fce9ec', // Tertiary surface,
    secondary20: '#f5bcc5', // Divider tertiary surface,
    secondary40: '#ee909f',
    secondary60: '#e86478', // Secondary over dark surfaces,
    secondary80: '#e13751',
    secondary120: '#c81e38',
    secondary140: '#9b172b', // Button container pressed,
    secondary160: '#6f111f',
    secondary180: '#430a13',
    secondary190: '#160306',
    tertiary: '#FFF',
    neutral100: '#0E0E10', // Black
    neutral95: '#1A1A1C',
    neutral90: '#272728', // Primary text, focus state outline, dark surface
    neutral85: '#323234',
    neutral80: '#3E3E40', // Icons, text on label button
    neutral70: '#575758', // Secondary text
    neutral60: '#6E6E70',
    neutral50: '#868687', // Tab bar, inactive icons & text
    neutral40: '#9F9F9F',
    neutral30: '#B7B7B8', // Disabled text, disabled icons
    neutral20: '#CFCFCF', // Disabled icons, divider on secondary surface, outline pressed tertiary elements
    neutral15: '#DBDBDB',
    neutral10: '#E7E7E8', // Secondary surface, divs on primary surface, outline disabled & tertiary elements
    neutral05: '#F3F3F3',
    neutral00: '#FFF', // White, primary surface, negative-icons & text
  },
  fontSizes: {
    body: '1.6rem',
    h1: '2rem',
    h2: '1.8rem',
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
    body: '#f1f1f1',
    card: '#FFFFFF',
  },
};

// export const darkTheme = {
//   ...defaultTheme,
//   colors: {
//     ...defaultTheme.colors,
//     body: '#222831',
//     card: '#393E46',
//   },
//   text: {
//     primary100: 'rgba(255, 255, 255, 0.9)',
//     primary200: 'rgba(255, 255, 255, 0.7)',
//     primary300: 'rgba(255, 255, 255, 0.4)',
//     primary400: 'rgba(255, 255, 255, 0.1)',
//   },
// };
