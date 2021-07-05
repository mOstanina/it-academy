"use strict"
function LocStorage(nameLocalStorage) {
    var self = this;
    if(nameLocalStorage in localStorage){
        self.storage=JSON.parse(localStorage.getItem(nameLocalStorage))
    }else{
    self.storage = {};
    localStorage.setItem(nameLocalStorage, JSON.stringify(self.storage))
    };
    self.addValue = function (key, value) {
        self.storage[key] = value;
        // console.log(self.storage); //для проверки
        // console.log(Object.keys(self.storage)); //для проверки
        localStorage.setItem(nameLocalStorage, JSON.stringify(self.storage))
    };
    self.getValue = function (key) {
        // console.log(self.storage[key]);//для проверки
        // console.log(typeof(self.storage[key]));//для проверки
        return (self.storage[key]);
    };
    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            localStorage.setItem(nameLocalStorage, JSON.stringify(self.storage))
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
var drinkStorage = new LocStorage("drink");
var alco;
var recipe;
var nameDrink;
function addDrink() {
    nameDrink = prompt("введите название напитка");
    var a = confirm("напиток алкогольный?");
    var c = (a == true) ? "да" : "нет";
    var b = prompt("введите рецепт напитка");
    var hash = { alco: c, recipe: b }
    // drinkStorage.addValue(nameDrink, (drinkStorage.storage[nameDrink] = { alco: c, recipe: b }));
    drinkStorage.addValue(nameDrink, hash);
};
function infoAboutDrink() {
    var nameOfDrink = prompt("введите название напитка");
    var drinkInfoMessage = drinkStorage.getValue(nameOfDrink);
    if (typeof drinkInfoMessage == "object") {
        alert("напиток: " + nameOfDrink + "\n" + "алкогольный: " + drinkInfoMessage["alco"] + "\n" + "рецепт приготовления: " + drinkInfoMessage["recipe"]);
    } else{
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
////////
var dishesStorage = new LocStorage("dishes");
var calories;
var recipe;
var nameDishes;
function addDish() {
    nameDishes = prompt("введите название блюда");
    var a = confirm("блюдо очень калорийное?");
    var c = (a == true) ? "да" : "нет";
    var b = prompt("введите рецепт блюда");
    var hash = { calories: c, recipe: b }
    // dishesStorage.addValue(nameDishes, (dishesStorage.storage[nameDishes] = { calories: c, recipe: b }));
    dishesStorage.addValue(nameDishes, hash);
};
function infoAboutDishes() {
    var nameOfDish = prompt("введите название блюда");
    var dishInfoMessage = dishesStorage.getValue(nameOfDish);
    if (typeof dishInfoMessage == "object") {
        alert("блюда: " + nameOfDish + "\n" + "калорийность: " + dishInfoMessage["calories"] + "\n" + "рецепт приготовления: " + dishInfoMessage["recipe"]);
    } else{
        alert("такого блюда нет в перечне");
    };
};
function deleteDishes() {
    var presenceInList = dishesStorage.deleteValue((prompt("введите название блюда, который хотите удалить")));
    (presenceInList) ? alert("блюда удалено") : alert("такого блюда нет в перечне");

};
function sowAllDishes() {
    alert(dishesStorage.getKeys());
};

