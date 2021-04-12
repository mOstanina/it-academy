var userString = prompt("Введите строку содержащую несколько слов");
var resultString;
var stringToUser;

// превоначальный вариант:
// function leftString(userString) {
//     //ищу пробелы пока только с левой стороны
//     var i = 0;
//     while (i < userString.length && userString[i] == "\x20") {
//         i++;
//     };
//     return userString.substring(i, userString.length);
// }
// function rightString(userString) {
//     //ищу пробелы только с правой стороны
//     var j = userString.length-1;
//     while (j > 0 && userString[j] == "\x20") {
//         j--;
//     };
//     return userString.substring(0, j+1);
// }
// function askAString(userString) {
//     return "\u2606"+ rightString(leftString(userString)) +"\u2606";
// }
// stringToUser = askAString(userString);
// console.log(stringToUser);
//---------------------------------------------------------------------------

// переделала в одну функцию:
function askAString(userString) {
    var j = userString.length - 1;
    while (j > 0 && userString[j] == " ") {
        j--;
    };
    var rightSide;
    rightSide = userString.substring(0, j + 1);

    var i = 0;
    while (i < rightSide.length && rightSide[i] == " ") {
        i++;
    };
    var leftSide;
    leftSide = rightSide.substring(i, rightSide.length);

    return "\u2606" + leftSide + "\u2606";
}

console.log(askAString(userString));