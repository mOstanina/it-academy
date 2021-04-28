//     function forE(el, index, arr) {
//         var str;
//         if (symbol.indexOf(el) !== -1) {
//             str = newUserString.replace(newUserString[index], symbol.charCodeAt(index));
//         };
//         return str;
//     };
//     var f = newUserString.forEach(forE);
//     // return ("<P>" + newUserString.forEach(forE).replace(newUserString, symbol.charCodeAt()) + "</P>");

//     return ("<P>" + f + "</P>");
// };

// console.log(buildWrapper("Однажды в студёную зимнюю пору"))

function buildWrapper(userString) {
    var newUserString = userString.split('');
    // var symbol = "&\"\`<>";
   
    var symbol = {
        "&": "&amp;",
        "'": "&#039;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;",
    };
    for (var i = 0; i < newUserString.length; i++) {
        if (newUserString[i] in symbol) {
          newUserString.replace(newUserString[i], symbol.newUserString[i]);
        }
    };
    console.log(newUserString)
    return ("<P>" + newUserString.join('') + "</P>");
};

console.log(buildWrapper("Однажды в студёную зимнюю пору"))
