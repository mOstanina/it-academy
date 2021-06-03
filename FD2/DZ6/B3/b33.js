function calc(statement) {
    //преобразую в массив
    var arrayOfsymbols = statement.split("");
    //console.log(arrayOfsymbols);
    var newArr = [];
    var elementString = "";
    //  если после скобки идет минус нужно сделать отрицательное число
    for (var j = 0; j < arrayOfsymbols.length; j++) {
        if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
            arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
            arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
            // console.log(arrayOfsymbols)
        }
    }
    // где есть точка делаю дробное число
    for (var k = 0; k < arrayOfsymbols.length; k++) {
        //console.log(arrayOfsymbols[k]);
        if (!isNaN(parseFloat(arrayOfsymbols[k])) || arrayOfsymbols[k] === ".") {
            elementString += arrayOfsymbols[k]
            //console.log(elementString);
        } else {
            if (elementString.length !== 0) {
                newArr.push(elementString)
                newArr.push(arrayOfsymbols[k])
                elementString = ""
            } else {
                newArr.push(arrayOfsymbols[k])
                //console.log(arrayOfsymbols[k]);
            }
        }
    }
    //console.log(elementString);
    //console.log(newArr);
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
    var operators = {
        "(": 0,
        ")": 0,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };
    var result = '';
    var stack = [];//массив для чисел
    var operatorsArray = [];//массив для операторов
    for (let i = 0; i < newArr.length; ++i) {
        var c = newArr[i];
        if (!isNaN(newArr[i])) {
            stack.push(newArr[i])
        } else {
            if (operatorsArray.length === 0) {
                operatorsArray.push(c)
                console.log(operatorsArray)
            } else {
                if (c === "(") {
                    operatorsArray.push(c)
                }
                if (c === ")") {//////////
                    while (operatorsArray[operatorsArray.length - 1] !== "(") {
                        if (operators[newArr[i - 1]] === "*") {
                            console.log("!!!!")
                            var b = stack.pop();
                            var a = stack.pop();
                            var n = a * b;
                            stack.push(n);
                            console.log(n)
                            operatorsArray.push(c)
                        }
                        if (operators[newArr[i - 1]] === "/") {
                            console.log("!!!!")
                            var b = stack.pop();
                            var a = stack.pop();
                            var n = a / b;
                            stack.push(a);
                            operatorsArray.push(c)
                        } if (operators[newArr[i - 1]] === "+") {
                            console.log("!!!!")
                            var b = stack.pop();
                            var a = stack.pop();
                            var n = a + b;
                            stack.push(a);
                            operatorsArray.push(c)
                        } if (operators[newArr[i - 1]] === "-") {
                            console.log("!!!!")
                            var b = stack.pop();
                            var a = stack.pop();
                            var n = a - b;
                            stack.push(a);
                            operatorsArray.push(c)
                        }
                    }


                    operatorsArray.push(c)
                }
                if (operators[c] >= operators[operatorsArray[operatorsArray.length - 1]] && c !== "(" && c !== ")") {
                    operatorsArray.push(c)
                }
                console.log(operators[c])
                console.log(operators[operatorsArray[operatorsArray.length - 1]])
                if (operators[c] < operators[operatorsArray[operatorsArray.length - 1]] && c !== "(" && c !== ")") {
                    console.log("!!!!")
                    if (operators[newArr[i - 1]] === "*") {
                        console.log("!!!!")
                        var b = stack.pop();
                        var a = stack.pop();
                        var n = a * b;
                        stack.push(n);
                        console.log(n)
                        operatorsArray.push(c)
                    }
                    if (operators[newArr[i - 1]] === "/") {
                        console.log("!!!!")
                        var b = stack.pop();
                        var a = stack.pop();
                        var n = a / b;
                        stack.push(a);
                        operatorsArray.push(c)
                    } if (operators[newArr[i - 1]] === "+") {
                        console.log("!!!!")
                        var b = stack.pop();
                        var a = stack.pop();
                        var n = a + b;
                        stack.push(a);
                        operatorsArray.push(c)
                    } if (operators[newArr[i - 1]] === "-") {
                        console.log("!!!!")
                        var b = stack.pop();
                        var a = stack.pop();
                        var n = a - b;
                        stack.push(a);
                        operatorsArray.push(c)
                    }
                    console.log(operators[operatorsArray[operatorsArray.length - 1]])
                    if (operators[c] === operators[operatorsArray[operatorsArray.length - 1]] || operators[operatorsArray[operatorsArray.length - 1]]) {
                        operatorsArray.push(c)
                    }
                    if (operators[c] > operators[operatorsArray[operatorsArray.length - 1]] && operators[c] !== "(" && operators[c] !== ")") {
                        operatorsArray.push(c)
                    }

                }
            }

        }
        console.log(stack)
        console.log(operatorsArray)





        // if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).indexOf(c) >= 0) {
        //     result += c;
        // } else if (c === '(') {
        //     stack.push(c);
        // } else if (c === ')') {
        //     var s = stack.pop();

        //     while (s && s != '(') {
        //         result += s;
        //         s = stack.pop();
        //     }
        // } else if (Object.keys(operators).indexOf(c) >= 0) {
        //     while (operators[stack.slice(-1)[0]] >= operators[c]) {
        //         result += stack.pop();
        //     }

        //     stack.push(c);
        // }
    }

    // let sym = '';

    // while (sym = stack.pop()) {
    //     result += sym;
    // }

    // return result;
}

// test
console.log(calc('1+2*3/(-4+5.888)*(6+7.7)'));