window.onload = (event) => {
    const language = localStorage.getItem("lang");
    const initLang = language ? language : "en";
    console.log("page is fully loaded", initLang);
    translate(initLang, "lng-tag");
    if (initLang === "en") {
        checkedBtn(true, false, false);
    } else if (initLang === "sp") {
        checkedBtn(false, true, false);
    } else if (initLang === "ru") {
        checkedBtn(false, false, true);
    }
};
const checkedBtn = (status1, status2, status3) => {
    document.getElementById("enTranslator").checked = status1;
    document.getElementById("spTranslator").checked = status2;
    document.getElementById("ruTranslator").checked = status3;
};
