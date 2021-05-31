// function calc(equation) {
//   // for (var i = 0; i < equation.length; i++) {
//   //     if (equation[i] === "(") {
//   //         start = equation.slice(i);//отрезаю все до скобки
//   //         console.log(start)
//   //     }
//   //     if (equation[i] === ")") {
//   //         end = start.slice(1, i - 2);//убираю скобку в начале и отрезаю скобку в конце и один знак
//   //         console.log(end)
//   //     }
//   // }
//   var arrayOfsymbols = equation.split("")//преобразую в массив

//   console.log(arrayOfsymbols);

//   for (var j = 0; j < arrayOfsymbols.length; j++) {
//     if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") { //если после скобки идет минус нужно сделать отрицательное число
//       arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
//       arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
//       console.log(arrayOfsymbols)
//     }
//   }

//   var startDot
//   var endtDot
//   var fractionalNumber
//   for (var k = 0; k < arrayOfsymbols.length; k++) { // где есть точка делаю дробное число
//     if (arrayOfsymbols[k] === ".") {
//       console.log(arrayOfsymbols[k]);
//       startDot = k - 1;
//       endtDot = k + 1
//     }
//     while (!isNaN(parseInt(arrayOfsymbols[startDot]))) {
//       startDot--
//       console.log(arrayOfsymbols[startDot]);
//     }
//     while (!isNaN(parseInt(arrayOfsymbols[endtDot])) && endtDot < arrayOfsymbols.length) {
//       console.log("!!!!");
//       endtDot++
//     }


//   }

//   console.log(endtDot);
//   fractionalNumber = arrayOfsymbols.slice(startDot + 1, endtDot).join("")
//   console.log(fractionalNumber);
//   console.log(arrayOfsymbols);
//   console.log(arrayOfsymbols.slice(endtDot));
//   arrayOfsymbols = arrayOfsymbols.slice(0, startDot + 1).concat(fractionalNumber, arrayOfsymbols.slice(endtDot))
//   console.log(arrayOfsymbols);


//   for (var f = 0; f < arrayOfsymbols.length; f++) { // где возможно, привожу к числу
//     var t = parseFloat(arrayOfsymbols[f])
//     if (!isNaN(t)) {
//       arrayOfsymbols[f] = t
//     }
//     console.log(typeof arrayOfsymbols[f])
//   }
//   console.log(arrayOfsymbols);
//   var start;
//   var end;
//   for (var i = 0; i < arrayOfsymbols.length; i++) {
//     if (arrayOfsymbols[i] === "(") {
//       //  start = arrayOfsymbols.slice(i);//отрезаю все до скобки
//       start = i + 1
//       //   console.log(i)
//     }
//     if (arrayOfsymbols[i] === ")") {
//       // console.log(i)
//       //  end = arrayOfsymbols.slice(i);//убираю скобку в начале и отрезаю скобку в конце и один знак
//       var end = i;
//       //  console.log(end)
//     }
//   }
//   var inBrackets = arrayOfsymbols.slice(start, end)
//   //console.log(inBrackets) 

// }
// calc("2*5+(-34+1)+1878.2-63")







//console.log(calc("2*(-3+1)+1"))

// var regExp = /\(([^)]+)\)/;
// var matches = regExp.exec("2*(-3+1)+1");

// //matches[1] contains the value between the parentheses
// console.log(matches);
// console.log(matches[1]);





function calc(equation) {

  ////////////////////////////////преобразую в массив
  var arrayOfsymbols = equation.split("")
  //console.log(arrayOfsymbols);
  var newArr = [];
  var elementString = "";
  ///////////////////////////////  если после скобки идет минус нужно сделать отрицательное число
  for (var j = 0; j < arrayOfsymbols.length; j++) {
    if (arrayOfsymbols[j] === "(" && (arrayOfsymbols[j + 1]) === "-") {
      arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2]
      arrayOfsymbols = arrayOfsymbols.slice(0, j + 1).concat(arrayOfsymbols[j + 1] + arrayOfsymbols[j + 2], arrayOfsymbols.slice(j + 3))
      //console.log(arrayOfsymbols)
    }
  }
  ///////////////////////////////// где есть точка делаю дробное число
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
      }
    }
  }
  //console.log(elementString);
  //console.log(newArr);
  ///////////////////////////////// где возможно, привожу к числу
  for (var f = 0; f < newArr.length; f++) {
    var t = parseFloat(newArr[f])
    if (!isNaN(t)) {
      newArr[f] = t
    }
    //console.log(typeof newArr[f])
  }
  console.log(newArr);
  ///////////////////////////////  если есть скобки, нахожу что в них
  var start;
  var end;
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === "(") {
      //  start = arrayOfsymbols.slice(i);//отрезаю все до скобки
      start = i + 1
      //   console.log(i)
    }
    if (newArr[i] === ")") {
      // console.log(i)
      //  end = arrayOfsymbols.slice(i);//убираю скобку в начале и отрезаю скобку в конце и один знак
      var end = i;
      //  console.log(end)
    }
  }
  var inBrackets = newArr.slice(start, end)
  console.log(inBrackets)

}
calc("2*5+(-34+1)+1878.2+(-63+2.88)")
