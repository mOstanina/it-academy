var enterString = prompt("Введите строку");
function askAString(userString) {
    var replaceUserString = userString.toLowerCase().replace(/[ ъъ.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/ё/g, "е");
    function result(string) {
        if (string.length < 2) {
            return true;
        }
        if (string[0] === string[string.length - 1]) {
            return result(string.slice(1, string.length - 1));
        } else {
            return false;
        }
    }
    return result(replaceUserString);
}
console.log(askAString(enterString) ? "это палиндром" : "это не палиндром");