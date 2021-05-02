const form = document.getElementById('myFormIdS'); //myFormIdSearch
const form2 = document.getElementById('myFormIdE'); //myFormIdEntrar
const form3 = document.getElementById('myFormIdR'); //myFormIdRegistrar

//búsqueda
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

//entrar
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
    } else if (inputPassword1.value.length < 8) {
        inputPassword1.classList.add("is-invalid");
        document.getElementById("errorPassword1").textContent = "La contrasenya ha de tenir almenys 8 caràcters";
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

//registrar cuenta
function registerValidate() {
    let acumErrores = 0;

    form3.classList.remove('is-invalid');

    let inputEmail2 = document.forms["myFormR"]["inputEmail2"];
    let inputPassword2 = document.forms["myFormR"]["inputPassword2"];
    let inputRepeatPassword = document.forms["myFormR"]["inputRepeatPassword"];
    let inputProvince = document.forms["myFormR"]["inputProvince"];
    let inputZip = document.forms["myFormR"]["inputZip"];

    if (inputEmail2.value == "") {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("errorEmail2").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (!validar_email(inputEmail2.value)) {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("errorEmail2").textContent = "Introdueix un correu electrònic vàlid";
        acumErrores++;
    } else {
        inputEmail2.classList.remove("is-invalid");
        document.getElementById("errorEmail2").textContent = "";
    }

    if (inputPassword2.value == "") {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (inputPassword2.value.length < 8) {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "La contrasenya ha de tenir com a mínim 8 caràcters";
        acumErrores++;
    } else {
        inputPassword2.classList.remove("is-invalid");
        document.getElementById("errorPassword2").textContent = "";
    }

    if (inputRepeatPassword.value == "") {
        inputRepeatPassword.classList.add("is-invalid");
        document.getElementById("errorRepeatPassword").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (inputRepeatPassword.value != inputPassword2.value) {
        inputRepeatPassword.classList.add("is-invalid");
        document.getElementById("errorRepeatPassword").textContent = "Les dues contrasenyes no coincideixen";
        acumErrores++;
    }

    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else {
        inputProvince.classList.remove("is-invalid");
        document.getElementById("errorProvince").textContent = "";
    }

    if (inputZip.value == "") {
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (inputZip.value.length != 5) {
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "Introdueix un codi postal vàlid";
        acumErrores++;
    } else {
        inputZip.classList.remove("is-invalid");
        document.getElementById("errorZip").textContent = "";
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