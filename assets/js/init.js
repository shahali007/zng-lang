window.onload = (event) => {
    const language = localStorage.getItem("lang");
    const initLang = language ? language : "en";
    console.log("page is fully loaded", initLang);
    translate(initLang, "lng-tag");
    document.getElementById("languageChange").value =  initLang;
};
