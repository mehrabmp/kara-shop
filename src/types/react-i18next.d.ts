import 'react-i18next';
import common from '../../locales/en/common.json';
import header from '../../locales/en/header.json';
import home from '../../locales/en/home.json';
import footer from '../../locales/en/footer.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      header: typeof header;
      home: typeof home;
      footer: typeof footer;
    };
  }
}
