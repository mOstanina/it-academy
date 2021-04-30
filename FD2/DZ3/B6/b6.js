var wrapP = buildWrapper("P");
var wrapH1 = buildWrapper("H1");
function buildWrapper(tagNew) {
    //создаю функцию, коротую буду возвращать
    //в функцию может передаваться 2 аргумента, но может и один
    var a = function getUserString(userStr, atri) {
        //в случае, если второй аргумент НЕ передается, то присваем сразу пустую строку
        if (atri == undefined) {
            hhh = "";
            //если второй аргумент есть
        } else {
            //создаю хеш, ключи котоорого - это возможные атрибуты
            var atrHash = {
                lang: "",
                align: "",
                title: "",
            };
            //проверяю для каждого ключа хеша есть ли в нем передаваемый атрибут
            for (var key in atrHash) {
                //если атрибут есть среди ключей хеша, то записываю его (этот ключ) в переменную
                if (key in atri) {
                    var atrInUserString = Object.entries(atri);
                } // тут вернется массив, с количеством элементов, равным количеству ключей, которое совпадет
            }
            //к каждому второй элемент массива заменяю символы на мнемонику, аотом уже добавляю кавычки
            //(чтобы они тоже не поменялись на мнемонику)
            //(функция замены смволов на мнемонику опианв ниже, но она "всплывет")
            for (var i = 0; i < atrInUserString.length; i++) {
                atrInUserString[i][1] =
                    "'" + convertString(atrInUserString[i][1]) + "'";
            }
            //создаю пустой массив hh, в который буду добавлять
            var hh = [];
            //для каждого элемента массива atrInUserString, который в свою очередь является массивом,
            // склеиваю в один элемент через = и сразу добавляю в свой пустой массив hh
            atrInUserString.forEach(function (item, i, atrInUserString) {
                hh.push(item.join("="));
                return hh;
            });
            //склеиваю свои элементы массива hh в строку через пробел, чтобы убрать запятые, которые будут, если
            //не перевести в строку, а оставить массивом
            var hhh = " " + hh.join(" ");
        }
        //перый аргумент привожу к массиву
        var arrayOfUserString = userStr.split(" ");
        arrayOfUserString = arrayOfUserString.join(" ");
        //функция замены символов на мнемонику
        function convertString(stringToConvert) {
            var mnemo = {
                "<": "&lt",
                ">": "&gt",
                "&": "&amp",
                "'": "&apos",
                '"': "&quot",
            };
            //проверяю каждый симовл в СТРОКЕ
            function changeSymbol(symbol) {
                return mnemo[symbol];
            }
            return stringToConvert.replace(/[<&>\'\"]/g, changeSymbol);
        }
        //возвращаю итоговую строку. Если второй агрумент не передавался, то в самом насале при прверке hhh=""
        //присваиваю ему пустое место
        return (
            "<" +
            tagNew +
            hhh +
            ">" +
            convertString(arrayOfUserString) +
            "</" +
            tagNew +
            ">"
        );
    };
    //возвращаю функцию
    return a;
}
console.log(wrapP("Однажды в студёную зимнюю & пору", { lang: "ru" }));
console.log(wrapH1("СТИХИ", { align: "center", title: "M&M's" }));
console.log(wrapP("Однажды в студёную зимнюю & пору"));
