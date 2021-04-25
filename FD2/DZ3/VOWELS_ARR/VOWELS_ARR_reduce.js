var userMessage = prompt("Веедите любую строку")
function countOf(userString) {
    var newUserString = userString.toLowerCase().split('');
    var vowels = "аеёиоуыэюя";
    var res = newUserString.reduce(function (count, val) {
        if (vowels.indexOf(val) !== -1) {
            count++;
        };
        return count;
    },0)
    return res;
};
console.log(countOf(userMessage));