"use strict"
function HashStorageFunc() {
    var self = this;
    self.storage = {};
    self.addValue = function (key, value) {
        self.storage[key] = value;
        console.log(self.storage); //для проверки
        // console.log(Object.keys(self.storage)); //для проверки
    };
    self.getValue = function (key) {
        // console.log(self.storage[key]);//для проверки
        return (self.storage[key]);
    };
    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            // console.log(true);//для проверки
            // console.log(Object.keys(self.storage)); //для проверки
            return true;
        } else {
            // console.log(false);//для проверки
            return false;
        }
    };
    self.getKeys = function () {
        var claearArrayOfKeys = Object.keys(self.storage);
        // console.log(claearArrayOfKeys);//для проверки
        return claearArrayOfKeys;
    };
};
var drinkStorage = new HashStorageFunc();
var alco;
var recipe;
var nameDrink;
function addDrink() {
    nameDrink = prompt("введите название напитка");
    var a = confirm("напиток алкогольный?");
    (a == true) ? (a = "да") : (a = "нет");
    var b = prompt("введите рецепт напитка");
    drinkStorage.storage[nameDrink] = {
        alco: a,
        recipe: b,
    };
    drinkStorage.addValue(nameDrink, (drinkStorage.storage[nameDrink]));
};
function infoAboutDrink() {
    var nameOfDrink = prompt("введите название напитка");
    var drinkInfoMessage = drinkStorage.getValue(nameOfDrink);
    if (nameOfDrink in drinkStorage.storage) {
        alert("напиток: " + nameOfDrink + "\n" + "алкогольный: " + drinkInfoMessage["alco"] + "\n" + "рецепт приготовления: " + drinkInfoMessage["recipe"]);
    } else {
        alert("такого напитка нет в перечне");
    };
};
function deleteDrink() {
    var presenceInList = drinkStorage.deleteValue((prompt("введите название напитка, который хотите удалить")));
    (presenceInList) ? alert("напиток удален"): alert("такого напитка нет в перечне");
};
function sowAllDrinks() {
    alert(drinkStorage.getKeys());
};