function translate(lng, tagAttr) {
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
}


document.getElementById("languageChange").addEventListener("change", (e) => {
    console.log(e.target.value);
    const lang = e.target.value;
    document.getElementById("languageChange").value =  lang;
    translate(lang, "lng-tag");
    localStorage.setItem("lang", lang);
});
