var userArray = [5, 7];
var summ = 0;
function treeSum(userArray) {
    if (userArray.length < 1) {
        return summ;
    } else {
        for (var i = 0; i < userArray.length; i++) {
            summ += userArray[i];
        }
        return summ;
    }


}
console.log(treeSum(userArray));





// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// alert(pow(2, 3)); // 8








// if (n <= 1) /* условие останова рекурсии */
//     return 1;
// return n + treeSum(n - 1); /* рекурсия */


//     summ = summ + i;
// }



// верно

// var userArray = [5, 7];
// var summ = 0;
// function treeSum(userArray) {
//     for (var i = 0; i < userArray.length; i++) {
//         summ += userArray[i];
//     }
//     return summ;
// }
// console.log(treeSum(userArray));

