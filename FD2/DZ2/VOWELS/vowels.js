var userMessage = prompt("Веедите любую строку")
function countOf(userString) {
    var newUserString = userString.toLowerCase().split('');
    var counter = 0;
    for (var el of newUserString) {
        if (el == "а" || el == "е" || el == "ё" || el == "и" || el == "о" || el == "у" || el == "ы" || el == "э" || el == "ю" || el == "я") {
            counter++;
        }
    }
    return counter;
};
console.log(countOf(userMessage));