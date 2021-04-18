var enterString = prompt("Введите строку");
function askAString(userString) {
    var newReplaceUserString = userString.toLowerCase().replace(/[ ъъ.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/ё/g,"е");
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