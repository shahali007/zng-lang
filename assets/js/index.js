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
changeTranslate("ruTranslator", "ru");
/* document.getElementById("spTranslator").addEventListener("click", () => {
    translate("sp", "lng-tag");
    localStorage.setItem("lang", "sp");
});
document.getElementById("ruTranslator").addEventListener("click", () => {
    translate("ru", "lng-tag");
    localStorage.setItem("lang", "ru");
}); */
/* $(document).ready(function () {
    $("#enTranslator").click(function () {
        translate("en", "lng-tag");
        localStorage.setItem("lang", "en");
    });
    $("#ruTranslator").click(function () {
        translate("ru", "lng-tag");
        localStorage.setItem("lang", "ru");
    });
    $("#spTranslator").click(function () {
        translate("sp", "lng-tag");
        localStorage.setItem("lang", "sp");
    });
}); */
