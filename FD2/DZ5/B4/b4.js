"use strict"
function metagramm(word1, word2) {

    var vocabulary = ["ЛУЖА", "МУЗА", "ЛИРА", "МЕХА", "ЛИГА", "ТАРА", "ЛИПА", "ТУРА", "ПАРК", "ЛОЖЬ", "ЛУПА", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"];
    var result = [];
    var set1 = new Set();
    var set2 = new Set();
    var set3 = new Set();
    var set4 = new Set();
    //while (word1 !== word2) {
    for (var i = 0; i < vocabulary.length; i++) {
        set1.add(vocabulary[i].slice(0, 1));
        set2.add(vocabulary[i].slice(1, 2));
        set3.add(vocabulary[i].slice(2, 3));
        set4.add(vocabulary[i].slice(3));
    };
    set1 = Array.from(set1);
    set2 = Array.from(set2);
    set3 = Array.from(set3);
    set4 = Array.from(set4);
    var arrayOfSets = [];
    arrayOfSets.push(set1);
    arrayOfSets.push(set2);
    arrayOfSets.push(set3);
    arrayOfSets.push(set4);
    console.log(arrayOfSets);
    console.log(set1)// ["Л", "М", "Т", "П", "С"]
    console.log(set2)// ["У", "И", "Е", "А", "О", "Л"]
    console.log(set3)// ["Ж", "З", "Р", "Х", "Г", "П", "О", "У"]
    console.log(set4)// ["А", "К", "Ь", "Т"]

    for (var i = 0; i < word1.length; i++) {

        if (word1.slice(0 + i, 1 + i) !== word2.slice(0 + i, 1 + i)) {
            var newLetter = word1.slice(0 + i, 1 + i);// заменяемя буква 
            console.log(newLetter);

            for (var j = 0; j < arrayOfSets.length; j++) {
                console.log(set1[j]);//буква для замены
                if (newLetter !== arrayOfSets[j]) {
                    var newWord = word1.replace(arrayOfSets[set1[j]], newLetter);
                    console.log(newWord);
                    for (var n = 0; n < vocabulary.length; n++) {
                        if (newWord === vocabulary[n]) {
                            result.push(newWord);
                            metagramm(newWord, word2)
                        }
                    }
                }

            }

        }

    };

    console.log(result);
    //  }
}
metagramm("ЛИСА", "ЛОСЬ");