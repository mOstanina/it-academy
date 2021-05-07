"use strict"
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
        nameDrink = prompt("введите название напитка");
       var a = confirm("напиток алкогольный?");
        var c = (a == true) ? "да" : "нет";
        var b = prompt("введите рецепт напитка");
        var hash = { alco: c, recipe: b }
        drinkStorage.addValue(nameDrink, hash);
    }
    infoAboutDrink(nameOfDrink) {
        nameOfDrink = prompt("введите название напитка");
         var drinkInfoMessage = drinkStorage.getValue(nameOfDrink);
        if (typeof drinkInfoMessage == "object") {
            alert("напиток: " + nameOfDrink + "\n" + "алкогольный: " + drinkInfoMessage["alco"] + "\n" + "рецепт приготовления: " + drinkInfoMessage["recipe"]);
        } else {
            alert("такого напитка нет в перечне");
        };
    }
    deleteDrink(presenceInList) {
        presenceInList = drinkStorage.deleteValue((prompt("введите название напитка, который хотите удалить")));
        (presenceInList) ? alert("напиток удален") : alert("такого напитка нет в перечне");
    }
    sowAllDrinks() {
        alert(drinkStorage.getKeys());
    }
}
var drinkStorage = new DrinkStorage();
drinkStorage.addDrink;
drinkStorage.infoAboutDrink;
drinkStorage.deleteDrink;
drinkStorage.sowAllDrinks;