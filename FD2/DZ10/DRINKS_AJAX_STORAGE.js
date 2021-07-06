"use strict"
var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName = "OSTANINA_DRINKS_AJAX_STORA"

function storeInfo() {
    updatePassword = Math.random();
    $.ajax({
        url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
        data: { f: 'LOCKGET', n: stringName, p: updatePassword },
        success: lockGetReady, error: errorHandler
    });
}
var storage;
function lockGetReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
    else {
        $.ajax({
            url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
            data: { f: 'UPDATE', n: stringName, v: JSON.stringify(storage), p: updatePassword },
            success: updateReady, error: errorHandler
        });
    }
}

function updateReady(callresult) {
    if (callresult.error != undefined) {
        alert(callresult.error);
    }
}

function restoreInfo() {
    $.ajax({
        url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
        data: { f: 'READ', n: stringName },
        success: readReady, error: errorHandler
    });
}

function readReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
    else if (callresult.result != "") {
        var info = JSON.parse(callresult.result);
        return info
    }
}

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + " " + errorStr);
}

function AJAXStorage() {
    var self = this;
    storage = self.storage = {};

    // addInfo(self.storage)
    //  restoreInfo()

    self.addValue = function (key, value) {

        self.storage[key] = value;
        storeInfo(self.storage)
    };
    self.getValue = function (key) {
        restoreInfo()
        return (self.storage[key]);
    };
    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            storeInfo(self.storage)
            return true;
        } else {
            return false;
        }
    };
    self.getKeys = function () {
        var claearArrayOfKeys = Object.keys(self.storage);
        restoreInfo()
        return claearArrayOfKeys;
    };
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
var drinkStorage = new AJAXStorage();
var alco;
var recipe;
var nameDrink;
function addDrink() {
    nameDrink = prompt("введите название напитка");
    var a = confirm("напиток алкогольный?");
    var c = (a == true) ? "да" : "нет";
    var b = prompt("введите рецепт напитка");
    var hash = { alco: c, recipe: b }
    drinkStorage.addValue(nameDrink, hash);
};
function infoAboutDrink() {
    var nameOfDrink = prompt("введите название напитка");
    var drinkInfoMessage = drinkStorage.getValue(nameOfDrink);
    if (typeof drinkInfoMessage == "object") {
        alert("напиток: " + nameOfDrink + "\n" + "алкогольный: " + drinkInfoMessage["alco"] + "\n" + "рецепт приготовления: " + drinkInfoMessage["recipe"]);
    } else {
        alert("такого напитка нет в перечне");
    };
};
function deleteDrink() {
    var presenceInList = drinkStorage.deleteValue((prompt("введите название напитка, который хотите удалить")));
    (presenceInList) ? alert("напиток удален") : alert("такого напитка нет в перечне");
};
function sowAllDrinks() {
    alert(drinkStorage.getKeys());
};