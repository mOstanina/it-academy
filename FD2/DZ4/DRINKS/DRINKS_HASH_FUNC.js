"use strict"
function HashStorageFunc() {
    var self = this;
    self.storage = {};
    self.addValue = function (key, value) {
        self.storage[key] = value;
        // console.log(self.storage[key]); //для проверки
        // console.log(Object.keys(self.storage)); //для проверки
    };

    self.getValue = function (key) {
        // console.log(self.storage[key]);//для проверки
        return self.storage[key];
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
        var claearArrayOfKeys =  Object.keys(self.storage);
        // console.log(claearArrayOfKeys);//для проверки
        return claearArrayOfKeys;
    };
};
var drinkStorage = new HashStorageFunc();
drinkStorage.addValue("coctail111", "mmm");
drinkStorage.addValue("coctail222", "vvv");
drinkStorage.addValue("coctail333", "zzz");
drinkStorage.addValue("coctail444", "yyy");
drinkStorage.getValue("coctail111");
drinkStorage.getValue("coctail222");
drinkStorage.deleteValue("coctail222");
drinkStorage.getKeys();