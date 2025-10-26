let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout = document.querySelector(".data__logout");

let getUser = () => {
    let myUser = localStorage.getItem("user");

    if (myUser) {
        let identity = JSON.parse(myUser);

        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hide");
        asideData.classList.remove("aside__data--hide");
    }
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Recoger datos
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;

    //Comprobar que no hay espacios vacíos
    let user = {};

    if (name && email && password) {
        //Guardar datos en un objeto
        user = {name, email, password};

        //Guardar en localStorage
        localStorage.setItem("user", JSON.stringify(user));

        //Vaciar formulario
        loginForm.reset();

        //Mostrar usuario
        getUser();
    }
});

//Mostrar usuario
getUser();

//Logout
btnLogout.addEventListener("click", () => {
    localStorage.clear();
    loginForm.classList.remove("aside__login--hide");
    asideData.classList.add("aside__data--hide");
});