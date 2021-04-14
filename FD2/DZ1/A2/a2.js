var enterString = prompt("Введите строку содержащую несколько слов");

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
    if (i == userString.length) {
        stringToUser = userString.substring(i, userString.length);
    } else {
        stringToUser = userString.substring(i, j + 1);
    }
    return stringToUser;
}
console.log("\u2606" + askAString(enterString) + "\u2606");