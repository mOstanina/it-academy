
var wrapP = buildWrapper();// по заданию как аргумент принимается сразу "P"
// в консоли выдает "Uncaught TypeError: wrapP is not a function at b6.js:19",
//ну да, это не функция, а ссылка на фукцию buildWrapper
function buildWrapper(userString) {
 
    var newUserString = userString.split(" "); //разбиваю строку по пробелу на массив слов 
    console.log(newUserString); //проверяю что вышло, потом удалю
    var languageAtr = {
        'lang:"ru"': "lang='ru'",
        "lang:'ru'": "lang='ru'",
        'lang:"en"': "lang='en'",
        "lang:'en'": "lang='en'",
    };

    //тут пытаюсь проверить полученный массив на наличие в нем ключа объекта но выдает -1, тк не находит 
    if (newUserString.indexOf('lang:"ru"')) {
        console.log(newUserString.indexOf(Object.keys(languageAtr)))
    };
   
}
console.log(wrapP("Однажды в студёную зимнюю пору", { lang: "ru" }));



//функция меняющая символы на мнемонику:
//тут все работает
function convertString(stringToConvert) {
    var mnemo = {
        "<": "&lt",
        ">": "&gt",
        "&": "&amp",
        "'": "&#039",
        '"': "&quot",
    };
    function changeSymbol(symbol) {
        return mnemo[symbol];
    }
    return stringToConvert.replace(/[<&>\'\"]/g, changeSymbol);
}
console.log(convertString("привет &привет>  < привет gbhg"));