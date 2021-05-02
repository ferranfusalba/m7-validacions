const form3 = document.getElementById('myFormIdR');

function valForm() {
    let acumErrores = 0;

    form3.classList.remove('is-invalid');

    let inputEmail = document.forms["myFormIdR"]["inputEmail"];
    let inputPassword = document.forms["myFormIdR"]["inputPassword"];
    let inputRepeatPassword = document.forms["myFormIdR"]["inputRepeatPassword"];
    let inputProvince = document.forms["myFormIdR"]["inputProvince"];
    let inputZip = document.forms["myFormIdR"]["inputZip"];

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Introdueix un correu electrònic vàlid";
        acumErrores++;
    } else {
        inputEmail.classList.remove("is-invalid");
        document.getElementById("errorEmail").textContent = "";
        document.getElementById("resultat-email").innerHTML = inputEmail.value;
    }

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (!validar_password(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "La contrasenya ha de tenir almenys 8 caràcters (amb 1 majúscula i 1 nombre)";
        acumErrores++;
    } else {
        inputPassword.classList.remove("is-invalid");
        document.getElementById("errorPassword").textContent = "";
    }

    if (inputRepeatPassword.value == "") {
        inputRepeatPassword.classList.add("is-invalid");
        document.getElementById("errorRepeatPassword").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else if (inputRepeatPassword.value != inputPassword.value) {
        inputRepeatPassword.classList.add("is-invalid");
        document.getElementById("errorRepeatPassword").textContent = "Les dues contrasenyes no coincideixen";
        acumErrores++;
    } else {
        inputRepeatPassword.classList.remove("is-invalid");
        document.getElementById("errorRepeatPassword").textContent = "";
    }

    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Aquest camp és obligatori";
        acumErrores++;
    } else {
        inputProvince.classList.remove("is-invalid");
        document.getElementById("errorProvince").textContent = "";
        document.getElementById("resultat-provincia").innerHTML = inputProvince.value;
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
        document.getElementById("resultat-zipcode").innerHTML = inputZip.value;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

$('a[href$="#Modal"]').on("click", function() {
    if (valForm()) {
        $('#Modal').modal('show');
    }
});

function validar_email(email) {
    var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return regex.test(email) ? true : false;
}

function validar_password(pass) {
    var regex = /^(?=.*?[0-9])(?=.*?[A-Z]).{8,}$/;
    return regex.test(pass) ? true : false;
}