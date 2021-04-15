var enterString = prompt("Введите строку содержащую несколько слов");
function askAString(userString) {
    var i = 0;
    var j = userString.length - 1;
    var stringToUser;
    while (i < userString.length && userString[i] == " ") {
        i++;
    };
    if (i == userString.length) {
        stringToUser = "";
        console.log("строка состоит только из пробелов");
    }
    else {
        while (j > 0 && userString[j] == " ") {
            j--;
        };
        if ((j== userString.length-1) && (i == 0)) {
            stringToUser = userString;
            console.log("в строке нет пробелов");
        } else {
            stringToUser = userString.substring(i, j + 1);
            console.log("в строке удалены начальные и конечные пробелы");
        };
    }
    return stringToUser;
}
console.log("\u2606" + askAString(enterString) + "\u2606");