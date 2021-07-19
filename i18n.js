const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh-TW', 'japanese'],
  fallbackLng: 'en',
  localeSubpaths: {
    'zh-TW': 'zh-TW',
    japanese: 'japanese',
  },
  react: {
    wait: true,
    useSuspense: false,
  },
});

// For next export static
NextI18NextInstance.i18n.languages = ['zh-TW', 'en', 'japanese'];

module.exports = NextI18NextInstance;
