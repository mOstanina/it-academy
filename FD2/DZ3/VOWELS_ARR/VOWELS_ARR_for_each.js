var userMessage = prompt("Веедите любую строку")
function countOf(userString) {
    var newUserString = userString.toLowerCase().split('');
    var vowels = "аеёиоуыэюя";
    var count = 0;
    function forE(el, index, arr) {
        if (vowels.indexOf(el) !== -1) {
            count++;
        }
        console.log(count);
        return count;
    };
    return newUserString.forEach(forE);
};
console.log(countOf(userMessage));
