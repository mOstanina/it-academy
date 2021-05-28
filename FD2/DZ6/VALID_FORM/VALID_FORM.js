"use strict";
var formTag = document.forms.INFO;
var errors = [];

var developersField = formTag.elements.DEVELOPERS;
developersField.addEventListener("blur", createMessageErrorDEVELOPERS, false);
function createMessageErrorDEVELOPERS(EO) {
    EO = EO || window.event;
    var developersValue = developersField.value;
    var span = document.getElementById("DEVELOPERS");
    if (developersValue.length > 50 || developersValue === "") {
        span.innerHTML = "Error";
        errors[0] = "Error"
    } else {
        span.innerHTML = "";
        errors[0] = "notError"
    }
    return;
}
//////////
var websiteField = formTag.elements.WEBSITE;
websiteField.addEventListener("blur", createMessageErrorWEBSITE, false);
function createMessageErrorWEBSITE(EO) {
    EO = EO || window.event;
    var websiteValue = websiteField.value;
    var span = document.getElementById("WEBSITE");
    if (websiteValue === "") {
        span.innerHTML = "Error";
        errors[1] = "Error";
    } else {
        span.innerHTML = "";
        errors[1] = "notError"
    }
    return;
}
//////////
var websiteUrlField = formTag.elements.WEBSITEURL;
websiteUrlField.addEventListener("blur", createMessageErrorWEBSITEURL, false);
function createMessageErrorWEBSITEURL(EO) {
    EO = EO || window.event;
    var websiteUrlValue = websiteUrlField.value;
    var span = document.getElementById("WEBSITEURL");
    if (websiteUrlValue === "") {
        span.innerHTML = "Error";
        errors[2] = "Error"
    } else {
        span.innerHTML = "";
        errors[2] = "notError"
    }
    return;
}
//////////
var dateField = formTag.elements.DATE;
dateField.addEventListener("blur", createMessageErrorDATE, false);
function createMessageErrorDATE(EO) {
    EO = EO || window.event;
    var dateValue = parseInt(dateField.value.trim());
    var span = document.getElementById("DATE");
    if (isNaN(dateValue)) {
        span.innerHTML = "Error";
        errors[3] = "Error"
    } else {
        span.innerHTML = "";
        errors[3] = "notError"
    }
    return;
}
//////////
var visitorsField = formTag.elements.VISITORS;
visitorsField.addEventListener("blur", createMessageErrorVISITORS, false);
function createMessageErrorVISITORS(EO) {
    EO = EO || window.event;
    var visitorsValue = parseInt(visitorsField.value.trim());
    var span = document.getElementById("VISITORS");
    if (isNaN(visitorsValue)) {
        span.innerHTML = "Error";
        errors[4] = "Error"
    } else {
        span.innerHTML = "";
        errors[4] = "notError"
    }
    return;
}
//////////
var emailField = formTag.elements.EMAIL;
emailField.addEventListener("blur", createMessageErrorEMAIL, false);
function createMessageErrorEMAIL(EO) {
    EO = EO || window.event;
    var emailValue = emailField.value;
    var span = document.getElementById("EMAIL");
    if (emailValue === "") {
        span.innerHTML = "Error";
        errors[5] = "Error"
    } else {
        span.innerHTML = "";
        errors[5] = "notError"
    }
    return;
}
//////////
var headingField = formTag.elements.HEADING;
headingField.addEventListener("blur", createMessageErrorHEADING, false);
function createMessageErrorHEADING(EO) {
    EO = EO || window.event;
    var headingValue = headingField.value;
    var span = document.getElementById("HEADING");
    if (headingValue == 1) {
        span.innerHTML = "Error";
        errors[6] = "Error"
    } else {
        span.innerHTML = "";
        errors[6] = "notError"
    }
    return;
}
// //////////
var placementField = formTag.elements.PLACEMENT;
var placementValue = placementField.value;
function createMessageErrorPLACEMENT() {
    var span = document.getElementById("PLACEMENT");
    if (!document.getElementById('11').checked && !document.getElementById('22').checked && !document.getElementById('33').checked) {
        span.innerHTML = "Error";
        errors[7] = "Error"
    } else {
        span.innerHTML = "";
        errors[7] = "notError"
    }
    return;
}
//////////
var resolutionField = formTag.elements.RESOLUTION;
resolutionField.addEventListener("blur", createMessageErrorRESOLUTION, false);
function createMessageErrorRESOLUTION(EO) {
    EO = EO || window.event;
    var resolutionValue = resolutionField.checked;
    var span = document.getElementById("RESOLUTION");
    if (!resolutionValue) {
        span.innerHTML = "Error";
        errors[8] = "Error"
    } else {
        span.innerHTML = "";
        errors[8] = "notError"
    }
    return;
}
//////////
var discriptionField = formTag.elements.DESCRIPTION;
discriptionField.addEventListener("blur", createMessageErrorDESCRIPTION, false);
function createMessageErrorDESCRIPTION(EO) {
    EO = EO || window.event;
    var discriptionValue = discriptionField.value;
    var span = document.getElementById("DESCRIPTION");
    if (discriptionValue === "") {
        span.innerHTML = "Error";
        errors[9] = "Error"
    } else {
        span.innerHTML = "";
        errors[9] = "notError"
    }
    return;
}
//////////////////////////////////////////////////
formTag.addEventListener('submit', validateInfoForm, false);
function validateInfoForm(EO) {
    EO = EO || window.event;
    try {
        createMessageErrorDEVELOPERS(EO);
        createMessageErrorWEBSITE(EO);
        createMessageErrorWEBSITEURL(EO);
        createMessageErrorDATE(EO);
        createMessageErrorVISITORS(EO);
        createMessageErrorEMAIL(EO);
        createMessageErrorHEADING(EO);
        createMessageErrorPLACEMENT();
        createMessageErrorRESOLUTION(EO);
        createMessageErrorDESCRIPTION(EO);
        switch ("Error") {
            case errors[0]:
                developersField.focus();
                EO.preventDefault();
                break;
            case errors[1]:
                websiteField.focus();
                EO.preventDefault();
                break;
            case errors[2]:
                websiteUrlField.focus();
                EO.preventDefault();
                break;
            case errors[3]:
                dateField.focus();
                EO.preventDefault();
                break;
            case errors[4]:
                visitorsField.focus();
                EO.preventDefault();
                break;
            case errors[5]:
                emailField.focus();
                EO.preventDefault();
                break;
            case errors[6]:
                headingField.focus();
                EO.preventDefault();
                break;
            case errors[7]:
                placementValue.scrollIntoView();
                EO.preventDefault();
                break;
            case errors[8]:
                resolutionField.focus();
                EO.preventDefault();
                break;
            case errors[9]:
                discriptionField.focus();
                EO.preventDefault();
                break;
        }
    }
    catch (ex) {
        alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
        EO.preventDefault();
    }
}