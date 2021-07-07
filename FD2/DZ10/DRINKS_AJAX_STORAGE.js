"use strict"
var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
function AJAXStorage(stringName) {
    var self = this;
    self.storage;
    // addInfo(self.storage)
    self.restoreInfo = function () {
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
            self.storage = JSON.parse(callresult.result);
            //return info
            //storage = self.storage
        }
    }
    self.storeInfo = function () {
        updatePassword = Math.random();
        $.ajax({
            url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
            data: { f: 'LOCKGET', n: stringName, p: updatePassword },
            success: lockGetReady, error: errorHandler
        });
    }
    function lockGetReady(callresult) {
        if (callresult.error != undefined)
            alert(callresult.error);
        else {
            $.ajax({
                url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
                data: { f: 'UPDATE', n: stringName, v: JSON.stringify(self.storage), p: updatePassword },
                success: updateReady, error: errorHandler
            });
        }
    }
    function updateReady(callresult) {
        if (callresult.error != undefined) {
            alert(callresult.error);
        }
    }
    function errorHandler(jqXHR, statusStr, errorStr) {
        alert(statusStr + " " + errorStr);
    }
    self.addValue = function (key, value) {
        self.storage[key] = value;
        self.storeInfo()
    };
    self.getValue = function (key) {
        return (self.storage[key]);
    };
    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            self.storeInfo()
            return true;
        } else {
            return false;
        }
    };
    self.getKeys = function () {
        var claearArrayOfKeys = Object.keys(self.storage);
        return claearArrayOfKeys;
    };
    self.restoreInfo()
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
var drinkStorage = new AJAXStorage("OSTANINA_DRINKS_AJAX_STORA");
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