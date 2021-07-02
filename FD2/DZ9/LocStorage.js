"use strict"
//  В проекте DRINKS разработать класс LocStorage (в модуле LocStorage.js) для хранения информации
//  в локальном хранилище (localStorage).
//  На веб-странице создать два объекта класса LocStorage и реализовать два интерфейса (набора кнопок)
//  — для работы с напитками и для работы с блюдами.
class HashStorageClass {
    constructor() {
        this.storage = {};
    }
    addValue(key, value) {
        this.storage[key] = value;
    }
    getValue(key) {
        return (this.storage[key]);
    }
    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    }
    getKeys() {
        var claearArrayOfKeys = Object.keys(this.storage);
        return claearArrayOfKeys;
    }
}
class DrinkStorage extends HashStorageClass {

    constructor() {
        super();
        this.alco;
        this.recipe;
        this.nameDrink;
    }
    addDrink(nameDrink) {
        drinkStorage=JSON.parse(window.localStorage.getItem("drinks"))

        nameDrink = prompt("введите название напитка");
        var a = confirm("напиток алкогольный?");
        var c = (a == true) ? "да" : "нет";
        var b = prompt("введите рецепт напитка");
        var hash = { alco: c, recipe: b }
        drinkStorage.addValue(nameDrink, hash);
        window.localStorage.setItem("drinks", JSON.stringify(drinkStorage))
    }
    infoAboutDrink(nameOfDrink) {
        window.localStorage.getItem("drinks", JSON.parse(drinkStorage))
        nameOfDrink = prompt("введите название напитка");
        var drinkInfoMessage = drinkStorage.getValue(nameOfDrink);
        if (typeof drinkInfoMessage == "object") {
            alert("напиток: " + nameOfDrink + "\n" + "алкогольный: " + drinkInfoMessage["alco"] + "\n" + "рецепт приготовления: " + drinkInfoMessage["recipe"]);
        } else {
            alert("такого напитка нет в перечне");
        };
    }
    deleteDrink(presenceInList) {
        localStorage.getItem("drinks", JSON.parse(drinkStorage))
        presenceInList = drinkStorage.deleteValue((prompt("введите название напитка, который хотите удалить")));
        (presenceInList) ? alert("напиток удален") : alert("такого напитка нет в перечне");
        window.localStorage.setItem("drinks", JSON.stringify(drinkStorage))
    }
    sowAllDrinks() {
        window.localStorage.getItem("drinks", JSON.parse(drinkStorage))
        alert(drinkStorage.getKeys());
    }
}
var drinkStorage = new DrinkStorage();
window.localStorage.setItem("drinks", JSON.stringify(drinkStorage))
drinkStorage.addDrink;
drinkStorage.infoAboutDrink;
drinkStorage.deleteDrink;
drinkStorage.sowAllDrinks;