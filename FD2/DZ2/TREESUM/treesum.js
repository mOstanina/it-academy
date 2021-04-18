var arrayFromUser = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8, 
];

function treeSum(userArray) {
    var summ = 0;
    for (var elOfArray of userArray) {
        if (typeof (elOfArray) == "number") {
            summ += elOfArray;
        } else {
           summ += treeSum(elOfArray);
        }
    };
    return summ;
};
console.log(treeSum(arrayFromUser));
