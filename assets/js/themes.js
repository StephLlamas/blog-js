//Elementos
const themeGreen = document.querySelector(".theme__green");
const themeRed = document.querySelector(".theme__red");
const themeBlue = document.querySelector(".theme__blue");
const page = document.querySelector("html");

//Aplicar o cambiar de tema
const applyTheme = (theme) => {
    page.removeAttribute("class");
    page.classList.add(`theme__${theme}--active`);
    localStorage.setItem("theme", theme);
};

//Asignar eventos a los botones
themeGreen.addEventListener("click", () => applyTheme("green"));
themeRed.addEventListener("click", () => applyTheme("red"));
themeBlue.addEventListener("click", () => applyTheme("blue"));

/*Cambiar tema
themeGreen.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__green--active");
    localStorage.setItem("theme", "green");
});

themeRed.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__red--active");
    localStorage.setItem("theme", "red");
});

themeBlue.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__blue--active");
    localStorage.setItem("theme", "blue");
});*/

//Aplicar tema guardado
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});
