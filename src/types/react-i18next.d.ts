import 'react-i18next';
import common from '../../public/locales/en/common.json';
import header from '../../public/locales/en/header.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      header: typeof header;
    };
  }
}
