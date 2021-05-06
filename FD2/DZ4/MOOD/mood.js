"use strict"
// function randomDiap(n, m) {
//     return Math.floor(Math.random() * (m - n + 1)) + n;
// };
// function mood(colorsCount) {
//     var colors = ['', "красный", "оранжевый", "желтый", "зеленый", "голоубой", "синий", "фиолетовый"];
//     console.log("цветов: " + colorsCount);
//     for (var i = 1; i <= colorsCount; i++) {
//         var n = randomDiap(1, 7);
//         var colorName = colors[n];
//         console.log(colorName);
//     }
// }
// mood(3);
/////////////////////////////////////////////////////////////////////////
// function randomDiap(n, m) {
//     return Math.floor(Math.random() * (m - n + 1)) + n;
// };
// function mood(colorsCount) {
//     var colors = ['', "красный", "оранжевый", "желтый", "зеленый", "голоубой", "синий", "фиолетовый"];
//     console.log("цветов: " + colorsCount);
//     var colorList = {};
//     while ((Object.keys(colorList)).length < colorsCount) {
//         for (var i = 1; i <= colorsCount; i++) {
//             var n = randomDiap(1, 7);
//             var colorName = colors[n];
//             if (!(colorName in colorList) && ((Object.keys(colorList)).length < colorsCount)) {
//                 colorList[colorName] = true;
//                 console.log(colorName);
//             }
//         }
//     }
// }
// mood(3);
// function randomDiap(n, m) {
//     return Math.floor(Math.random() * (m - n + 1)) + n;
// };
// function mood(colorsCount) {
//     var colors = ['', "красный", "оранжевый", "желтый", "зеленый", "голоубой", "синий", "фиолетовый"];
//     console.log("цветов: " + colorsCount);
//     var colorList = {};
//     for (var i = 1; i <= colorsCount; i++) {
//         var n = randomDiap(1, 7);
//         var colorName = colors[n];
//         if (!(colorName in colorList)) {
//             colorList[colorName] = true;
//             console.log(colorName);
//         } else {
//             colorsCount++
//         }
//     }
// }
// mood(3);
function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
};
function mood(colorsCount) {
    var colors = ['', "красный", "оранжевый", "желтый", "зеленый", "голоубой", "синий", "фиолетовый"];
    console.log("цветов: " + colorsCount);
    var colorList = {};
    var counter = 0;
    while (counter < colorsCount) {
        // for (var i = 1; i <= colors.length; i++) {
            var n = randomDiap(1, 7);
            var colorName = colors[n];
            if (!(colorName in colorList)) {
                colorList[colorName] = true;
                console.log(colorName);
                counter++;
            };
        // }
    }
}
mood(3);