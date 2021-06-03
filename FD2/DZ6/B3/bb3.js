function calc(statement) {
    //преобразую в массив
    var arrayOfsymbols = statement.split("");
    console.log(arrayOfsymbols);
    var newArr = [];
    var elementString = "";
    var elementDot = "";
    var resultT = "";
    //  если после скобки идет минус нужно сделать отрицательное число
    for (var j = 0; j < arrayOfsymbols.length; j++) {
        if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
            arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
            arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
            // console.log(arrayOfsymbols)
        }
    }
    // где есть точка делаю дробное число
    // console.log(arrayOfsymbols)
    console.log(arrayOfsymbols);
    for (var k = 0; k < arrayOfsymbols.length; k++) {
        // console.log(arrayOfsymbols[k]);
        if (isNaN(parseFloat(arrayOfsymbols[k])) || arrayOfsymbols[k] === ".") {
            newArr.push(arrayOfsymbols[k])
            //  console.log(arrayOfsymbols[k]);
        } else {
            newArr.push(arrayOfsymbols[k])
        }
    }
    for (var h = 1; h < newArr.length; h++) {
        if (newArr[h] === ".") {

        }
    }

    //    console.log(arrayOfsymbols);
    //     for (var k = 0; k < arrayOfsymbols.length; k++) {
    //         console.log(arrayOfsymbols[k]);
    //         if (!isNaN(parseFloat(arrayOfsymbols[k])) || arrayOfsymbols[k] === ".") {
    //             elementString += arrayOfsymbols[k]
    //             console.log(elementString);
    //         } else {
    //             if (elementString.length > 0) {
    //                 console.log(elementString);
    //                 newArr.push(elementString)
    //                 newArr.push(arrayOfsymbols[k])
    //                // console.log((arrayOfsymbols[k]));
    //                 elementString = ""
    //             } else {
    //                 newArr.push(arrayOfsymbols[k])
    //                 console.log(arrayOfsymbols[k]);
    //             }
    //         }
    //     }
    //console.log(elementString);

    console.log(newArr);
    /// где возможно, привожу к числу
    for (var f = 0; f < newArr.length; f++) {
        var t = parseFloat(newArr[f])
        if (!isNaN(t)) {
            newArr[f] = t;
        }
        //console.log(typeof newArr[f])
    }
    console.log(newArr);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // приоритеты операторов
    function tt() {
        var prioritet = {
            "(": 0,
            ")": 0,
            "+": 1,
            "-": 1,
            "*": 2,
            "/": 2,
        };
        var operators = {
            "+": (x, y) => x + y,
            "-": (x, y) => x - y,
            "*": (x, y) => x * y,
            "/": (x, y) => x / y,
        }
        var stackOut = [];//массив для чисел
        var operatorsStack = [];//массив для операторов
        var result = [];
        for (let i = 0; i < newArr.length; ++i) {
            var c = newArr[i];
            console.log(c)
            if (!isNaN(c)) {
                stackOut.push(c);
            } else {
                // console.log(prioritet[c])
                // console.log(c)
                if (c === "(") {
                    // console.log("!!!")
                    operatorsStack.push(c)
                }
                if (c in operators) {
                    if (operatorsStack.length === 0) {
                        // console.log("!!!!")
                        operatorsStack.push(c)
                    } else {
                        //console.log("!!!!")
                        // console.log(prioritet[c])
                        // console.log(prioritet[operatorsStack[operatorsStack.length - 1]])
                        //console.log(c)
                        var a = prioritet[c]
                        var b = prioritet[operatorsStack[operatorsStack.length - 1]]
                        // console.log(a)
                        // console.log(b)
                        if (a > b) {
                            console.log("!!!!")
                            operatorsStack.push(c)
                            console.log(operatorsStack)
                        }
                        if (a <= b) {
                            var m = operatorsStack.pop()
                            console.log(m)
                            stackOut.push(m)
                            operatorsStack.push(c)
                            // console.log("111111111111")
                        }
                    }
                }
                if (c === ")") {
                    console.log("22222222")
                    for (var j = 1; j < operatorsStack.length; j++) {
                        if (j !== "(") {
                            stackOut.push(operatorsStack.pop())
                            // console.log(operatorsStack.pop())
                        }
                    }
                    operatorsStack.pop()
                    console.log(stackOut)
                    console.log(operatorsStack)
                }
            }
            console.log(stackOut)
            console.log(operatorsStack)
        }
        for (var s = 0; s < operatorsStack.length; s++) {
            stackOut.push(operatorsStack.pop())
        }
        console.log(stackOut)
        console.log(operatorsStack)
        ///////////////
        for (var i = 0; i < stackOut.length; i++) {
            console.log(stackOut[i])
            if (stackOut[i] in operators) {
                var y = result.pop()
                var x = result.pop()
                console.log(y)
                console.log(x)
                console.log(operators[stackOut[i]](x, y))
                var e = operators[stackOut[i]](x, y)
                result.push(e)
                console.log(result)
            } else {
                result.push(stackOut[i])
                console.log(result)
            }

        }
        console.log(result)
        return (result)
    }
    resultT = tt(newArr);
    return resultT
}
console.log(calc("(7+1-4)/(2+1*2)+1"));
//console.log(calc('1+2*3/(-4+5.888)*(6+7.7)'));