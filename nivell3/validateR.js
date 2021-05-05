const form3 = document.getElementById('myFormIdR');

bienEmail.textContent = "H";
bienPassword.textContent = "H";
bienRP.textContent = "H";
bienProvince.textContent = "H";
bienZip.textContent = "H";

function valForm() {
    let acumErrores = 0;

    form3.classList.remove('is-invalid');

    let inputEmail = document.forms["myFormIdR"]["inputEmail"];
    let inputPassword = document.forms["myFormIdR"]["inputPassword"];
    let inputRepeatPassword = document.forms["myFormIdR"]["inputRepeatPassword"];
    let inputProvince = document.forms["myFormIdR"]["inputProvince"];
    let inputZip = document.forms["myFormIdR"]["inputZip"];

    if (inputEmail.value == "") {
        factorIf(bienEmail, inputEmail, errorEmail, messageCaption.obligatori);
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        factorElseIf(inputEmail, errorEmail, messageCaption.emailValid, bienEmail);
        acumErrores++;
    } else {
        factorElse(inputEmail, errorEmail, bienEmail);
        document.getElementById("resultat-email").innerHTML = inputEmail.value;
    }

    if (inputPassword.value == "") {
        factorIf(bienPassword, inputPassword, errorPassword, messageCaption.obligatori);
        acumErrores++;
    } else if (!validar_password(inputPassword.value)) {
        factorElseIf(inputPassword, errorPassword, messageCaption.passwordMinim, bienPassword);
        acumErrores++;
    } else {
        factorElse(inputPassword, errorPassword, bienPassword);
    }

    if (inputRepeatPassword.value == "") {
        factorIf(bienRP, inputRepeatPassword, errorRepeatPassword, messageCaption.obligatori);
        acumErrores++;
    } else if (inputRepeatPassword.value != inputPassword.value) {
        factorElseIf(inputRepeatPassword, errorRepeatPassword, messageCaption.passwordCoincideix, bienRP);
        acumErrores++;
    } else {
        factorElse(inputRepeatPassword, errorRepeatPassword, bienRP);
    }

    if (inputProvince.value == "") {
        factorIf(bienProvince, inputProvince, errorProvince, messageCaption.obligatori);
        acumErrores++;
    } else {
        factorElse(inputProvince, errorProvince, bienProvince);
        document.getElementById("resultat-provincia").innerHTML = inputProvince.value;
    }

    if (inputZip.value == "") {
        factorIf(bienZip, inputZip, errorZip, messageCaption.obligatori);
        acumErrores++;
    } else if (inputZip.value.length != 5) {
        factorElseIf(inputZip, errorZip, messageCaption.zipValid, bienZip);
        acumErrores++;
    } else {
        factorElse(inputZip, errorZip, bienZip);
        document.getElementById("resultat-zipcode").innerHTML = inputZip.value;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function factorIf(messageBien, inputType, messageError, messageCaption) {
    messageBien.textContent = "";
    inputType.classList.add("is-invalid");
    messageError.textContent = messageCaption;
}

function factorElseIf(inputType, messageError, messageCaption, messageBien) {
    inputType.classList.add("is-invalid");
    messageError.textContent = messageCaption;
    messageBien.textContent = "";
}

function factorElse(inputType, messageError, messageBien) {
    inputType.classList.remove("is-invalid");
    messageError.textContent = "";
    messageBien.textContent = "H";
}

let messageCaption = {
    obligatori: "Aquest camp és obligatori",
    emailValid: "Introdueix un correu electrònic vàlid",
    passwordMinim: "La contrasenya ha de tenir almenys 8 caràcters (amb 1 majúscula i 1 nombre)",
    passwordCoincideix: "Les dues contrasenyes no coincideixen",
    zipValid: "Introdueix un codi postal vàlid"
}

$('a[href$="#Modal"]').on("click", function() {
    if (valForm()) {
        $('#Modal').modal('show');
    }
});

function validar_email(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email) ? true : false;
}

function validar_password(pass) {
    var regex = /^(?=.*?[0-9])(?=.*?[A-Z]).{8,}$/;
    return regex.test(pass) ? true : false;
}