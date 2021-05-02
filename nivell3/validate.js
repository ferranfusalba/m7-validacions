const form = document.getElementById('myFormIdS'); //myFormIdSearch
const form2 = document.getElementById('myFormIdE'); //myFormIdEntrar

//search
function searchValidate() {
    var acumErrores = 0;

    form.classList.remove('is-invalid');

    var inputSearch = document.forms["myFormS"]["inputSearch"];

    if (inputSearch.value == "") {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (inputSearch.value.length < 3) {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Introdueix com a mínim 3 caràcters";
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

//signin
function signInValidate() {
    var acumErrores = 0;

    form2.classList.remove('is-invalid');

    var inputEmail1 = document.getElementById('inputEmail1');
    var inputPassword1 = document.forms["myFormE"]["inputPassword1"];

    if (inputEmail1.value == "") {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("errorEmail1").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (!validar_email(inputEmail1.value)) {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("errorEmail1").textContent = "El correu electrònic no compleix el format";
        acumErrores++;
    } else {
        inputEmail1.classList.remove("is-invalid");
        document.getElementById("errorEmail1").textContent = "";
    }

    if (inputPassword1.value == "") {
        inputPassword1.classList.add("is-invalid");
        document.getElementById("errorPassword1").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (!validar_password(inputPassword1.value)) {
        inputPassword1.classList.add("is-invalid");
        document.getElementById("errorPassword1").textContent = "La contrasenya ha de tenir almenys 8 caràcters (amb 1 majúscula i 1 nombre)";
        acumErrores++;
    } else {
        inputPassword1.classList.remove("is-invalid");
        document.getElementById("errorPassword1").textContent = "";
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function validar_email(email) {
    var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return regex.test(email) ? true : false;
}

function validar_password(pass) {
    var regex = /^(?=.*?[0-9])(?=.*?[A-Z]).{8,}$/;
    return regex.test(pass) ? true : false;
}