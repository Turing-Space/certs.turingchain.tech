const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'zh-TW',
  otherLanguages: ['en'],
  fallbackLng: 'zh-TW',
});
