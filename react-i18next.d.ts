import 'react-i18next';
import { LocaleResources } from './src/types';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: LocaleResources;
  }
}
