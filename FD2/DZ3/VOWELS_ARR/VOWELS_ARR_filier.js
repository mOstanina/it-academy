var userMessage = prompt("Веедите любую строку")
function countOf(userString) {
    var newUserString = userString.toLowerCase().split('');
    var vowels = "аеёиоуыэюя";
    function filt(el, index, arr) {
        if (vowels.indexOf(el) !== -1)
            return true;
    };
    return newUserString.filter(filt).length;
};
console.log(countOf(userMessage));
