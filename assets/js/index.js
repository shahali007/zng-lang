function translate(lng, tagAttr) {
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
}
function changeTranslate(id, lang) {
    document.getElementById(id).addEventListener("click", () => {
        translate(lang, "lng-tag");
        localStorage.setItem("lang", lang);
    });
}
changeTranslate("enTranslator", "en");
changeTranslate("spTranslator", "sp");

