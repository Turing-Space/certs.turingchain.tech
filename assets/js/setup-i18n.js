import i18n from "./i18n.es6.js";

i18n
  .set({
    resource: "assets/i18n.json",
    locale: "en",
  })
  .init(() => i18n.translate());

function onChangeLanguage() {
  const value = document.getElementById("language-selector").value;
  i18n.set("locale", value).init(function () {
    this.translate();
  });
}

document.getElementById("language-selector").onchange = onChangeLanguage;
