"use strict";
var formTag = document.forms.INFO;
var developersField = formTag.elements.DEVELOPERS;
var developersValue = developersField.value;
developersField.addEventListener("blur", createMessageErrorDEVELOPERS, false);
function createMessageErrorDEVELOPERS(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("DEVELOPERS");
    span.appendChild(textInSpan);
    console.log(developersValue.length)
    var text;
    if (developersValue.length > 5 || developersValue === "") {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;

    return;
}

//////////
var websiteField = formTag.elements.WEBSITE;
var websiteValue = websiteField.value;
websiteField.addEventListener("blur", createMessageErrorWEBSITE, false);
function createMessageErrorWEBSITE(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("WEBSITE");
    var text;
    textInSpan.innerHTML = text;
    if (websiteValue === "") {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!");
        text = "";
    }
    span.appendChild(textInSpan);
    return;
}
//////////
var websiteUrlField = formTag.elements.WEBSITEURL;
var websiteUrlValue = websiteUrlField.value;
websiteUrlField.addEventListener("blur", createMessageErrorWEBSITEURL, false);
function createMessageErrorWEBSITEURL(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("WEBSITEURL");
    span.appendChild(textInSpan);
    var text;
    if (websiteUrlValue === "") {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var datelField = formTag.elements.DATE;
var datelValue = parseInt(datelField.value.trim());
datelField.addEventListener("blur", createMessageErrorDATE, false);
function createMessageErrorDATE(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("WEBSITEURL");
    span.appendChild(textInSpan);
    var text;
    if (isNaN(datelValue)) {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var visitorsField = formTag.elements.VISITORS;
var visitorsValue = parseInt(visitorsField.value.trim());
visitorsField.addEventListener("blur", createMessageErrorVISITORS, false);
function createMessageErrorVISITORS(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("VISITORS");
    span.appendChild(textInSpan);
    var text;
    if (isNaN(visitorsValue)) {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var emailField = formTag.elements.EMAIL;
var emailValue = emailField.value;
emailField.addEventListener("blur", createMessageErrorEMAIL, false);
function createMessageErrorEMAIL(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("EMAIL");
    span.appendChild(textInSpan);
    var text;
    if (emailValue === "") {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var headingField = formTag.elements.HEADING;
var headingValue = headingField.value;
headingField.addEventListener("blur", createMessageErrorHEADING, false);
function createMessageErrorHEADING(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("HEADING");
    span.appendChild(textInSpan);
    var text;
    if (headingValue === 3) {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var placementField = formTag.elements.PLACEMENT;
var placementValue = placementField.value;
placementField.addEventListener("blur", createMessageErrorPLACEMENT, false);
function createMessageErrorPLACEMENT(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("PLACEMENT");
    span.appendChild(textInSpan);
    var text;
    if (placementValue === 33) {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var resolutionField = formTag.elements.RESOLUTION;
var resolutionValue = resolutionField.checked;
resolutionField.addEventListener("blur", createMessageErrorRESOLUTION, false);
function createMessageErrorRESOLUTION(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("RESOLUTION");
    span.appendChild(textInSpan);
    var text;
    if (!resolutionValue) {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
    return;
}
//////////
var discriptionField = formTag.elements.DESCRIPTION;
var discriptionValue = discriptionField.value;
discriptionField.addEventListener("blur", createMessageErrorDESCRIPTION, false);
function createMessageErrorDESCRIPTION(EO) {
    EO = EO || window.event;
    console.log("!!!")
    var textInSpan = document.createTextNode("");
    var span = document.getElementById("DESCRIPTION");
    span.appendChild(textInSpan);
    var text;
    if (discriptionValue === "") {
        console.log("Error!")
        text = "Error";
        EO.preventDefault();
    } else {
        console.log("notError!")
        text = "";
    }
    textInSpan.innerHTML = text;
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
        createMessageErrorPLACEMENT(EO);
        createMessageErrorRESOLUTION(EO);
        createMessageErrorDESCRIPTION(EO);
    }
    catch (ex) {
        alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
        EO.preventDefault();
    }
}