var enterString = prompt("Введите строку содержащую несколько слов");
var userString;

function askAString(userString) {
    var j = userString.length - 1;
    while (j > 0 && userString[j] == " ") {
        j--;
    };
 
    var i = 0;
    while (i < userString.length && userString[i] == " ") {
        i++;
    };
    var stringToUser;
    stringToUser = userString.substring(i, j+1);

    return stringToUser;
}

console.log("\u2606" + askAString(enterString)+ "\u2606");