"use strict"
function metagramm(word1, word2) {
    var vocabulary = ["ЛУЖА", "МУЗА", "ЛИРА", "МЕХА", "ЛИГА", "ТАРА", "ЛИПА", "ТУРА", "ПАРК", "ЛОЖЬ", "ЛУПА", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"];
    var result;
    // фунция сравнения двух слов
    function comparison(value1, value2) {
        var count = 0;
        for (var i = 0; i < value1.length; i++) {
            if (value1[i] === value2[i]) {
                count++;
            }
        }
        if (count === 3) {
            return true;
        } else {
            return false;
        }
    }
    var exception = [];// создаю массив для исключений, т.е для слов котрые подходят
    function JJJ(word1) {
        for (var j = 0; j < vocabulary.length; j++) {//перебираю весь словарь
            var m = vocabulary[j];
            if (comparison(word1, vocabulary[j]) && (!exception.includes(vocabulary[j]))) {
                m = vocabulary[j];
                exception.push(vocabulary[j]);
                JJJ(vocabulary[j])
            }
        }
    }
    JJJ(word1);
    //проверяю чтобы последнее слово отличалось от конечного только 1 символом
    var len = exception.length - 1;
    if (!comparison((exception[len]), word2)) {
        exception.pop(exception[len])

    }
    // из полученного массива исключений удаляю те, что отличаются друг от друга только 1 буквой
    //кроме последнего (для связи с последующей цепочкой)
    var metagrammArray = [];
    for (var l = 0; l < exception.length; l++) {
        if (comparison(word1, exception[l]) && (!metagrammArray.includes(exception[l]))) {
            metagrammArray.push(exception[l]);
        }
    }
    //узнаю индексы этих слов в массиве исключений и удаляю
    for (var n = 0; n < metagrammArray.length - 1; n++) {
        var ind;
        ind = exception.indexOf(metagrammArray[n])
        delete exception[ind]
    }
    result = word1 + " " + exception.join(" ") + " " + word2;
    console.log(result);
    return result
}
metagramm("ЛИСА", "ЛОСЬ");
metagramm("МУХА", "СЛОН");