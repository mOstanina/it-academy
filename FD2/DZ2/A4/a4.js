var enterString = prompt("Введите строку");
function askAString(userString) {
    var newReplaceUserString = userString.toLowerCase().replace(/[ ъъ.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/ё/g, "е");
    var halfOfUserString = (Math.floor(newReplaceUserString.length / 2));
    var lastIndex = newReplaceUserString.length - 1;
    if (halfOfUserString < 2) {
        return true;
    } 
    if (newReplaceUserString[0] === newReplaceUserString[lastIndex]) {
        return askAString(newReplaceUserString.slice(1, lastIndex));
    } else {
        return false;
    }
}
console.log(askAString(enterString) ? "это палиндром" : "это не палиндром");