import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      currentLanguage: 'Current language: English',
      english: 'English',
      spanish: 'Spanish',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido',
      currentLanguage: 'Idioma actual: Español',
      english: 'Inglés',
      spanish: 'Español',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;