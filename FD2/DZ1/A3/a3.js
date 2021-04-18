var enterString = prompt("Введите строку").toLowerCase();
function askAString(userString) {
    var newReplaceUserString = userString.replace(/[ ъъ.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/ё/g, "e");
    var halfOfUserString = (Math.floor(newReplaceUserString.length / 2));
    var lastIndex = newReplaceUserString.length - 1;
    for (var i = 0; i < halfOfUserString; i++) {
        if (newReplaceUserString[i] !== newReplaceUserString[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
console.log(askAString(enterString) ? "это палиндром" : "это не палиндром");