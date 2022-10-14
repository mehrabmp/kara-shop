import 'react-i18next';
import common from '../../locales/en/common.json';
import header from '../../locales/en/header.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      header: typeof header;
    };
  }
}
