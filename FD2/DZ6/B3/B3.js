// // function calc(equation) {
// //   // for (var i = 0; i < equation.length; i++) {
// //   //     if (equation[i] === "(") {
// //   //         start = equation.slice(i);//отрезаю все до скобки
// //   //         console.log(start)
// //   //     }
// //   //     if (equation[i] === ")") {
// //   //         end = start.slice(1, i - 2);//убираю скобку в начале и отрезаю скобку в конце и один знак
// //   //         console.log(end)
// //   //     }
// //   // }
// //   var arrayOfsymbols = equation.split("")//преобразую в массив

// //   console.log(arrayOfsymbols);

// //   for (var j = 0; j < arrayOfsymbols.length; j++) {
// //     if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") { //если после скобки идет минус нужно сделать отрицательное число
// //       arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
// //       arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
// //       console.log(arrayOfsymbols)
// //     }
// //   }

// //   var startDot
// //   var endtDot
// //   var fractionalNumber
// //   for (var k = 0; k < arrayOfsymbols.length; k++) { // где есть точка делаю дробное число
// //     if (arrayOfsymbols[k] === ".") {
// //       console.log(arrayOfsymbols[k]);
// //       startDot = k - 1;
// //       endtDot = k + 1
// //     }
// //     while (!isNaN(parseInt(arrayOfsymbols[startDot]))) {
// //       startDot--
// //       console.log(arrayOfsymbols[startDot]);
// //     }
// //     while (!isNaN(parseInt(arrayOfsymbols[endtDot])) && endtDot < arrayOfsymbols.length) {
// //       console.log("!!!!");
// //       endtDot++
// //     }


// //   }

// //   console.log(endtDot);
// //   fractionalNumber = arrayOfsymbols.slice(startDot + 1, endtDot).join("")
// //   console.log(fractionalNumber);
// //   console.log(arrayOfsymbols);
// //   console.log(arrayOfsymbols.slice(endtDot));
// //   arrayOfsymbols = arrayOfsymbols.slice(0, startDot + 1).concat(fractionalNumber, arrayOfsymbols.slice(endtDot))
// //   console.log(arrayOfsymbols);


// //   for (var f = 0; f < arrayOfsymbols.length; f++) { // где возможно, привожу к числу
// //     var t = parseFloat(arrayOfsymbols[f])
// //     if (!isNaN(t)) {
// //       arrayOfsymbols[f] = t
// //     }
// //     console.log(typeof arrayOfsymbols[f])
// //   }
// //   console.log(arrayOfsymbols);
// //   var start;
// //   var end;
// //   for (var i = 0; i < arrayOfsymbols.length; i++) {
// //     if (arrayOfsymbols[i] === "(") {
// //       //  start = arrayOfsymbols.slice(i);//отрезаю все до скобки
// //       start = i + 1
// //       //   console.log(i)
// //     }
// //     if (arrayOfsymbols[i] === ")") {
// //       // console.log(i)
// //       //  end = arrayOfsymbols.slice(i);//убираю скобку в начале и отрезаю скобку в конце и один знак
// //       var end = i;
// //       //  console.log(end)
// //     }
// //   }
// //   var inBrackets = arrayOfsymbols.slice(start, end)
// //   //console.log(inBrackets) 

// // }
// // calc("2*5+(-34+1)+1878.2-63")







// //console.log(calc("2*(-3+1)+1"))

// // var regExp = /\(([^)]+)\)/;
// // var matches = regExp.exec("2*(-3+1)+1");

// // //matches[1] contains the value between the parentheses
// // console.log(matches);
// // console.log(matches[1]);





// function calcGlobal(equation) {
//   //console.log(equation)//
//   ///////////////////////////////////////////////////////////////////////преобразую в массив
//   var arrayOfsymbols = equation.split("")
//   //console.log(arrayOfsymbols);
//   var newArr = [];
//   var elementString = "";
//   ////////////////////////////////////////////  если после скобки идет минус нужно сделать отрицательное число
//   for (var j = 0; j < arrayOfsymbols.length; j++) {
//     if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
//       arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
//       arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
//       //console.log(arrayOfsymbols)
//     }
//   }
//   //////////////////////////////////////////////////////////////////////// где есть точка делаю дробное число
//   for (var k = 0; k < arrayOfsymbols.length; k++) {
//     //console.log(arrayOfsymbols[k]);
//     if (!isNaN(parseFloat(arrayOfsymbols[k])) || arrayOfsymbols[k] === ".") {
//       elementString += arrayOfsymbols[k]
//       console.log(elementString);

//     } else {
//       if (elementString.length !== 0) {
//         newArr.push(elementString)
//         newArr.push(arrayOfsymbols[k])

//         elementString = ""
//       } else {
//         newArr.push(arrayOfsymbols[k])
//       }
//     }

//   }
//   //console.log(elementString);
//   //console.log(newArr);
//   //////////////////////////////////////////////////////////////////////// где возможно, привожу к числу
//   for (var f = 0; f < newArr.length; f++) {
//     var t = parseFloat(newArr[f])
//     if (!isNaN(t)) {
//       newArr[f] = t
//       console.log(t);
//     }
//     //console.log(typeof newArr[f])
//   }
//   console.log(newArr);
//   //////////////////////////////////////////////////////////////////////  если есть скобки, нахожу что в них

//   for (var i = 0; i < newArr.length; i++) {
//     var start;
//     var end;
//     var newArrPart;
//     if (newArr[i] === "(") {

//       //  start = arrayOfsymbols.slice(i);//отрезаю все до скобки
//       start = i + 1
//       console.log(start)
//       newArrPart = newArr.slice(0, i)
//       console.log(newArrPart)
//     }
//     if (newArr[i] === ")") {
//       // console.log(i)
//       //  end = arrayOfsymbols.slice(i);//убираю скобку в начале и отрезаю скобку в конце и один знак
//       end = i;
//       console.log(end)
//       var inBrackets = newArr.slice(start, end);
//       console.log(calc(inBrackets));
//       var inBracketsResult = calc(inBrackets)
//       newArr = newArrPart.concat(inBracketsResult, newArr.slice(i + 1))
//     }
//   }
//   // var inBrackets = newArr.slice(start, end)

//   console.log(newArr);
//   console.log(calc(newArr));
//   calc(newArr)

//   /////////////////////////////////////////////////////////сама функция вычислений
//   function calc(arrayOfEquations) {
//     var action;
//     console.log(arrayOfEquations)
//     while (arrayOfEquations.length > 1) {
//       console.log("!!!!")
//       for (var i = 0; i < arrayOfEquations.length; i++) {
//         if (arrayOfEquations[i] === "*") {
//           console.log("!!!!")
//           action = arrayOfEquations[i - 1] * arrayOfEquations[i + 1];
//           if (i + 1 === arrayOfEquations.length - 1) {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
//           } else {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
//           }

//           console.log(arrayOfEquations)
//         }

//       }

//       for (var i = 0; i < arrayOfEquations.length; i++) {
//         if (arrayOfEquations[i] === "/") {
//           action = arrayOfEquations[i - 1] / arrayOfEquations[i + 1];
//           if (i + 1 === arrayOfEquations.length - 1) {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
//           } else {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
//           }
//           console.log(arrayOfEquations)
//         }
//       }

//       for (var i = 0; i < arrayOfEquations.length; i++) {
//         if (arrayOfEquations[i] === "+") {
//           action = arrayOfEquations[i - 1] + arrayOfEquations[i + 1];
//           if (i + 1 === arrayOfEquations.length - 1) {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
//           } else {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
//           }
//           console.log(arrayOfEquations)
//         }
//       }
//       for (var i = 0; i < arrayOfEquations.length; i++) {
//         if (arrayOfEquations[i] === "-") {
//           action = arrayOfEquations[i - 1] - arrayOfEquations[i + 1];
//           if (i + 1 === arrayOfEquations.length - 1) {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
//           } else {
//             arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
//           }
//           console.log(arrayOfEquations)
//         }
//       }
//       //console.log(arrayOfEquations)  
//       console.log(arrayOfEquations)
//       return arrayOfEquations
//     }
//   }
// }
// calcGlobal("2*5+(-34+1)+1878.2")
// calcGlobal("2*5+(-34+1)+1878.2")

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
  // console.log(arrayOfsymbols)
  var newArr = [];
  var resultT = "";
  //////     если после скобки идет минус нужно сделать отрицательное число
  for (var j = 0; j < arrayOfsymbols.length; j++) {
    // console.log(arrayOfsymbols)
    // console.log(arrayOfsymbols[j])
    if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
      arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
      arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
    }
  }
  if (arrayOfsymbols[0] === "-") {
    var firstMinus = []
    firstMinus.push(arrayOfsymbols[0] + arrayOfsymbols[1])
    var otherPartOfArray = arrayOfsymbols.slice(2)
    // console.log(firstMinus)
    // console.log(otherPartOfArray)
    arrayOfsymbols = firstMinus.concat(otherPartOfArray)
    // console.log(arrayOfsymbols)
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
  // console.log(newArr)
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 2)собственно само вычисление с помощью "побратной польской записи"

  function tt() {
    var stackOut = [];// массив для чисел
    var operatorsStack = [];// массив для операторов
    var result = [];// для вывода результата
    for (let i = 0; i < newArr.length; ++i) {
      // console.log(newArr[i])
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
          // console.log("######")
          for (var j = operatorsStack.length - 1; j > 0; j--) {
            // console.log(operatorsStack[j])
            if (operatorsStack[j] !== "(") {
              stackOut.push(operatorsStack.pop())
            } else {
              //console.log("******")
              operatorsStack.pop()
            }
          }

        }
      }
      // console.log(stackOut)
      // console.log(operatorsStack)
    }
    for (var s = 0; s < operatorsStack.length; s++) {
      //console.log(operatorsStack[s])
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
console.log(calc("1+(2*(-3+1))"));
console.log(calc("-2+3"));