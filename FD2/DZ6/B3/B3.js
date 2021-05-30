function calc(equation) {
    // for (var i = 0; i < equation.length; i++) {
    //     if (equation[i] === "(") {
    //         start = equation.slice(i);//отрезаю все до скобки
    //         console.log(start)
    //     }
    //     if (equation[i] === ")") {
    //         end = start.slice(1, i - 2);//убираю скобку в начале и отрезаю скобку в конце и один знак
    //         console.log(end)
    //     }
    // }
    var arrayOfsymbols = equation.split("")
    console.log(arrayOfsymbols);
    for (var j = 0; j < arrayOfsymbols.length; j++) {
        if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
            //console.log(arrayOfsymbols.slice(0,j+1))
            arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
           // console.log(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2])
            var arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
            console.log(arrayOfsymbols)
        }
    }
    var start;
    var end;
    for (var i = 0; i < arrayOfsymbols.length; i++) {
        if (arrayOfsymbols[i] === "(") {
          //  start = arrayOfsymbols.slice(i);//отрезаю все до скобки
          start=i+1
         //   console.log(i)
        }
        if (arrayOfsymbols[i] === ")") {
           // console.log(i)
          //  end = arrayOfsymbols.slice(i);//убираю скобку в начале и отрезаю скобку в конце и один знак
            var end=i;
          //  console.log(end)
        }
    }
    var inBrackets=arrayOfsymbols.slice(start,end)
   console.log(inBrackets) 

}
calc("2*5+(-3+1)+1")







//console.log(calc("2*(-3+1)+1"))

// var regExp = /\(([^)]+)\)/;
// var matches = regExp.exec("2*(-3+1)+1");

// //matches[1] contains the value between the parentheses
// console.log(matches);
// console.log(matches[1]);