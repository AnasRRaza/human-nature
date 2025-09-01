import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import i18next from 'i18next';

import en from '@/localization/locales/english.json';
import fr from '@/localization/locales/french.json';

const locales = RNLocalize.getLocales();

const fallbackLng = 'en';
const language = locales[0]?.languageCode || fallbackLng;

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: language,
  fallbackLng,
  interpolation: { escapeValue: false },
});

export default i18next;
