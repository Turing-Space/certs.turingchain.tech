import i18n from "./i18n.es6.js";

i18n
  .set({
    resource: "/assets/i18n.json",
    locale: "en",
  })
  .init(() => {
    $('#language-selector option[value="en"]').prop('selected', true);
    i18n.translate()
  });

function onChangeLanguage() {
  const value = document.getElementById("language-selector").value;
  document.cookie = `language=${value}; path=/`;
  i18n.set("locale", value).init(function () {
    this.translate();
  });
}

function getLanguage() {
  let cookieArray = document.cookie.split(';');
  let language = '';
  for (var i = 0; i < cookieArray.length; i++) {
    var cookieKey = cookieArray[i].split('=')[0];
    var cookieValue = cookieArray[i].split('=')[1];
    if (cookieKey == ' language' && (cookieValue == 'en' || cookieValue == 'zh-TW' || cookieValue == 'jp')) {
      language = cookieValue;
    }
  }

  const defaultLang = navigator.language || navigator.userLanguage;
  const supportLanguages = ['en', 'zh-TW', 'jp'];

  if (language === 'en') {
    $('#language-selector option[value="en"]').prop('selected', true);
  } else if (language === 'zh-TW') {
    $('#language-selector option[value="zh-TW"]').prop('selected', true);
  } else if (language === 'jp'){
    $('#language-selector option[value="jp"]').prop('selected', true);
  } else if (supportLanguages.includes(defaultLang)) {
    language = defaultLang;
    $(`#language-selector option[value="${defaultLang}"]`).prop('selected', true);
  }

  i18n.set("locale", language).init(function () {
    this.translate();
  });
  return null;
}

document.getElementById("language-selector").onchange = onChangeLanguage;
document.body.onload = getLanguage;