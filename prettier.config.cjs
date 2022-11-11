/** @type {import("prettier").Config} */
module.exports = {
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  plugins: [require('prettier-plugin-tailwindcss')],
};
