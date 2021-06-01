
function calcGlobal(equation) {
  //console.log(equation)//
  ///////////////////////////////////////////////////////////////////////преобразую в массив
  var arrayOfsymbols = equation.split("")
  //console.log(arrayOfsymbols);
  var newArr = [];
  var elementString = "";
  ////////////////////////////////////////////  если после скобки идет минус нужно сделать отрицательное число
  for (var j = 0; j < arrayOfsymbols.length; j++) {
    if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
      arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
      arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
      //console.log(arrayOfsymbols)
    }
  }
  //////////////////////////////////////////////////////////////////////// где есть точка делаю дробное число
  for (var k = 0; k < arrayOfsymbols.length; k++) {
    //console.log(arrayOfsymbols[k]);
    if (!isNaN(parseFloat(arrayOfsymbols[k])) || arrayOfsymbols[k] === ".") {
      elementString += arrayOfsymbols[k]
      console.log(elementString);

    } else {
      if (elementString.length !== 0) {
        newArr.push(elementString)
        newArr.push(arrayOfsymbols[k])

        elementString = ""
      } else {
        newArr.push(arrayOfsymbols[k])
      }
    }

  }
  //console.log(elementString);
  //console.log(newArr);
  //////////////////////////////////////////////////////////////////////// где возможно, привожу к числу
  for (var f = 0; f < newArr.length; f++) {
    var t = parseFloat(newArr[f])
    if (!isNaN(t)) {
      newArr[f] = t
      console.log(t);
    }
    //console.log(typeof newArr[f])
  }
  console.log(newArr);
  //////////////////////////////////////////////////////////////////////  если есть скобки, нахожу что в них

  for (var i = 0; i < newArr.length; i++) {
    var start;
    var end;
    var newArrPart;
    if (newArr[i] === "(") {

      //  start = arrayOfsymbols.slice(i);//отрезаю все до скобки
      start = i + 1
      console.log(start)
      newArrPart = newArr.slice(0, i)
      console.log(newArrPart)
    }
    if (newArr[i] === ")") {
      // console.log(i)
      //  end = arrayOfsymbols.slice(i);//убираю скобку в начале и отрезаю скобку в конце и один знак
      end = i;
      console.log(end)
      var inBrackets = newArr.slice(start, end);
      console.log(calc(inBrackets));
      var inBracketsResult = calc(inBrackets)
      newArr = newArrPart.concat(inBracketsResult, newArr.slice(i + 1))
    }
  }
  // var inBrackets = newArr.slice(start, end)

  console.log(newArr);
  console.log(calc(newArr));
  calc(newArr)

  /////////////////////////////////////////////////////////сама функция вычислений
  function calc(arrayOfEquations) {
    var action;
    console.log(arrayOfEquations)
    while (arrayOfEquations.length > 1) {
      console.log("!!!!")
      for (var i = 0; i < arrayOfEquations.length; i++) {
        if (arrayOfEquations[i] === "*") {
          console.log("!!!!")
          action = arrayOfEquations[i - 1] * arrayOfEquations[i + 1];
          if (i + 1 === arrayOfEquations.length - 1) {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
          } else {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
          }

          console.log(arrayOfEquations)
        }

      }

      for (var i = 0; i < arrayOfEquations.length; i++) {
        if (arrayOfEquations[i] === "/") {
          action = arrayOfEquations[i - 1] / arrayOfEquations[i + 1];
          if (i + 1 === arrayOfEquations.length - 1) {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
          } else {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
          }
          console.log(arrayOfEquations)
        }
      }

      for (var i = 0; i < arrayOfEquations.length; i++) {
        if (arrayOfEquations[i] === "+") {
          action = arrayOfEquations[i - 1] + arrayOfEquations[i + 1];
          if (i + 1 === arrayOfEquations.length - 1) {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
          } else {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
          }
          console.log(arrayOfEquations)
        }
      }
      for (var i = 0; i < arrayOfEquations.length; i++) {
        if (arrayOfEquations[i] === "-") {
          action = arrayOfEquations[i - 1] - arrayOfEquations[i + 1];
          if (i + 1 === arrayOfEquations.length - 1) {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action)
          } else {
            arrayOfEquations = arrayOfEquations.slice(0, i - 1).concat(action, arrayOfEquations.slice([i + 2]))
          }
          console.log(arrayOfEquations)
        }
      }
      //console.log(arrayOfEquations)  
      console.log(arrayOfEquations)
      return arrayOfEquations
    }
  }
}
calcGlobal("2*5+(-34+1)+1878.2")
calcGlobal("2*5+(-34+1)+1878.2")