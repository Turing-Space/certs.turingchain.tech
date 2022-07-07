import i18n from "./i18n.es6.js";

i18n
  .set({
    resource: "assets/i18n.json",
    locale: "en",
  })
  .init(() => i18n.translate());

function onChangeLanguage() {
  const value = document.getElementById("language-selector").value;
  document.cookie = 'language=' + value;
  i18n.set("locale", value).init(function () {
    this.translate();
  });
}

function getLanguage() {
  var langCookie = document.cookie.split(';');
  var langString = langCookie[2];
  var lang = langString.split('=');
  var language = lang[1];
  if (language === 'en') {
    $('#language-selector option[value="en"]').prop('selected', true);
  } else {
    $('#language-selector option[value="zh-TW"]').prop('selected', true);
  }
  i18n.set("locale", language).init(function () {
    this.translate();
  });
  return null;
}

document.getElementById("language-selector").onchange = onChangeLanguage;
document.body.onload = getLanguage;
