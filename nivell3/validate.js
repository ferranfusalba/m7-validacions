const form = document.getElementById('myFormIdS'); //myFormIdSearch
const form2 = document.getElementById('myFormIdE'); //myFormIdEntrar

bienSearch.textContent = "H";
bienEmail1.textContent = "H";
bienPassword1.textContent = "H";

function searchValidate() {
    var acumErrores = 0;

    form.classList.remove('is-invalid');

    var inputSearch = document.forms["myFormS"]["inputSearch"];

    if (inputSearch.value == "") {
        factorIf0(bienSearch, inputSearch, errorSearch, messageCaption0.obligatori);
        acumErrores++;
    } else if (inputSearch.value.length < 3) {
        factorElseIf0(inputSearch, errorSearch, messageCaption0.cercaTres, bienSearch);
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function signInValidate() {
    var acumErrores = 0;

    form2.classList.remove('is-invalid');

    var inputEmail1 = document.getElementById('inputEmail1');
    var inputPassword1 = document.forms["myFormE"]["inputPassword1"];

    if (inputEmail1.value == "") {
        factorIf0(bienEmail1, inputEmail1, errorEmail1, messageCaption0.obligatori);
        acumErrores++;
    } else if (!validar_email(inputEmail1.value)) {
        factorElseIf0(inputEmail1, errorEmail1, messageCaption0.emailValid, bienEmail1);
        acumErrores++;
    } else {
        factorElse0(inputEmail1, errorEmail1, bienEmail1);
    }

    if (inputPassword1.value == "") {
        factorIf0(bienPassword1, inputPassword1, errorPassword1, messageCaption0.obligatori);
        acumErrores++;
    } else if (!validar_password(inputPassword1.value)) {
        factorElseIf0(inputPassword1, errorPassword1, messageCaption0.passwordMinim, bienPassword1);
        acumErrores++;
    } else {
        factorElse0(inputPassword1, errorPassword1, bienPassword1);
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function factorIf0(messageBien, inputType, errorType, messageCaption0) {
    messageBien.textContent = "";
    inputType.classList.add("is-invalid");
    errorType.textContent = messageCaption0;
}

function factorElseIf0(inputType, errorType, messageCaption0, messageBien) {
    inputType.classList.add("is-invalid");
    errorType.textContent = messageCaption0;
    messageBien.textContent = "";
}

function factorElse0(inputType, errorType, messageBien) {
    inputType.classList.remove("is-invalid");
    errorType.textContent = "";
    messageBien.textContent = "H";
}

let messageCaption0 = {
    obligatori: "Aquest camp és obligatori",
    cercaTres: "Introdueix com a mínim 3 caràcters",
    emailValid: "Introdueix un correu electrònic vàlid",
    passwordMinim: "La contrasenya ha de tenir almenys 8 caràcters (amb 1 majúscula i 1 nombre)"
}

function validar_email(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email) ? true : false;
}

function validar_password(pass) {
    var regex = /^(?=.*?[0-9])(?=.*?[A-Z]).{8,}$/;
    return regex.test(pass) ? true : false;
}