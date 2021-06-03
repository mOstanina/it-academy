function calc(statement) {
    var prioritet = {  // приоритеты операторов
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

    // 1)блок преобразования исходной строчки в массив, с которым можно будет работать

    //////     преобразую в массив
    var arrayOfsymbols = statement.split("");
    var newArr = [];
    var resultT = "";
    //////     если после скобки идет минус нужно сделать отрицательное число
    for (var j = 0; j < arrayOfsymbols.length; j++) {
        if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
            arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
            arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
        }
    }
    //////     где есть точка делаю дробное число
    for (var k = 0; k < arrayOfsymbols.length; k++) {
        if (newArr.length === 0) {
            newArr.push(arrayOfsymbols[k])
        } else {
            if (arrayOfsymbols[k] in prioritet) {
                newArr.push(arrayOfsymbols[k])
            } else {
                if (isNaN(newArr[newArr.length - 1])) {
                    newArr.push(arrayOfsymbols[k])
                } else {
                    newArr[newArr.length - 1] = newArr[newArr.length - 1] + arrayOfsymbols[k]
                }
            }
        }
    }
    //////     где возможно, привожу к числу
    for (var f = 0; f < newArr.length; f++) {
        var t = parseFloat(newArr[f])
        if (!isNaN(t)) {
            newArr[f] = t;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 2)собственно само вычисление с помощью "побратной польской записи"

    function tt() {
        var stackOut = [];// массив для чисел
        var operatorsStack = [];// массив для операторов
        var result = [];// для вывода результата
        for (let i = 0; i < newArr.length; ++i) {
            var c = newArr[i];
            if (!isNaN(c)) {
                stackOut.push(c);
            } else {
                if (c === "(") {
                    operatorsStack.push(c)
                }
                if (c in operators) {
                    if (operatorsStack.length === 0) {
                        operatorsStack.push(c)
                    } else {
                        var a = prioritet[c]
                        var b = prioritet[operatorsStack[operatorsStack.length - 1]]
                        if (a > b) {
                            operatorsStack.push(c)
                        }
                        if (a <= b) {
                            var m = operatorsStack.pop()
                            stackOut.push(m)
                            operatorsStack.push(c)
                        }
                    }
                }
                if (c === ")") {
                    for (var j = 1; j < operatorsStack.length; j++) {
                        if (j !== "(") {
                            stackOut.push(operatorsStack.pop())
                        }
                    }
                    operatorsStack.pop()
                }
            }
        }
        for (var s = 0; s < operatorsStack.length; s++) {
            stackOut.push(operatorsStack.pop())
        }
        for (var i = 0; i < stackOut.length; i++) {
            if (stackOut[i] in operators) {
                var y = result.pop()
                var x = result.pop()
                var e = operators[stackOut[i]](x, y)
                result.push(e)
            } else {
                result.push(stackOut[i])
            }
        }
        return (result)
    }
    resultT = tt(newArr);
    return resultT
}
console.log(calc("(6+10-4)/(1+1*2)+1"));
console.log(calc("2*(-3+1)"));