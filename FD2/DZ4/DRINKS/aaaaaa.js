"use strict"
function HashStorageFunc() {
    var self = this;
    self.addValue = function (key, value) {
        self[key] = value;
    };
    console.log(typeof self.addValue)//для проверки
    self.getValue = function (key) {
        console.log(self[key]);//для проверки
    };
    self.deleteValue = function (key) {
        if (key in self) {
            delete self[key];
            console.log(true);//для проверки
            return true;
        } else {
            console.log(false);//для проверки
            return false;
        }
    };
    self.getKeys = function () {
        var claearArrayOfKeys = [];
        var arrayOfKeys = Object.keys(self);
        console.log(arrayOfKeys)//для проверки
        for (var i = 0; i < arrayOfKeys.length; i++) {
            var arrKey = arrayOfKeys[i];
            if (typeof self[arrKey] !== "function") {
                claearArrayOfKeys.push(arrKey);
            }
        }
        console.log(claearArrayOfKeys);//для проверки
        return claearArrayOfKeys;
    };
};
var drinkStorage = new HashStorageFunc();
drinkStorage.addValue("coctail111", "mmm");
drinkStorage.addValue("coctail222", "vvv");
drinkStorage.addValue("coctail333", "zzz");
drinkStorage.addValue("coctail444", "yyy");
drinkStorage.getValue("coctail111");
drinkStorage.deleteValue("coctail222");
drinkStorage.getKeys();