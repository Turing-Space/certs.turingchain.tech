const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'zh-TW',
  otherLanguages: ['en'],
  fallbackLng: 'zh-TW',
  react: {
    wait: true,
    useSuspense: false,
  },
});

// For next export static
NextI18NextInstance.i18n.languages = ['zh-TW', 'en'];

module.exports = NextI18NextInstance;
