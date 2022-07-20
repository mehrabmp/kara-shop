const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.+(js|jsx|ts|tsx|json|yml|yaml|css|scss|md)':
    'prettier --ignore-unknown --write',
};
