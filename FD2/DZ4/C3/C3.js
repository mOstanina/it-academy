"use strict"
function deepComp(value1, value2) {
    var result;
    if (typeof value1 !== typeof value2) {
        result = false;
    } else {
        if (typeof value1 == "number" || typeof value1 == "boolean") {
            if (value1 == value2) {
                result = true;
            } else {
                result = false;
            }
        } else if ((value1 == null && value2 == null) || (value1 == undefined && value2 == undefined)) {
            result = true;
        } else if (typeof value1 == "string") {
            if (value1.length !== value2.length) {
                result = false;
            } else {
                for (var i = 0; i < value1.length; i++) {
                    if (value1[i] == value2[i]) {
                        result = true;
                    } else {
                        result = false;
                    }
                }
            }
        } else if (Array.isArray(value1)) {
            if (value1.length !== value2.length) {
                result = false;
            } else {
                for (var j = 0; j < value1.length; j++) {
                    if (typeof value1[j] == typeof value2[j]) {
                        deepComp(value1[j], value2[j]);
                    } else {
                        result = false;
                    };
                };
            };
        } else {
            if (Object.keys(value1).length !== Object.keys(value2).length) {
                result = false;
            } else {
                for (var key in value1) {
                    deepComp(value1[key], value2[key]);
                };
            };
        };
    };
    return result;
};
//тесты
function deepCompTests() {
    var count = 0;
    for (var i = 0; i < znach.length; i++) {
        console.log(znach[i].expectedResult);
        console.log(znach[i].expr);
        if (znach[i].expr === znach[i].expectedResult) {
            console.log("тест пройден");
            count++
        } else {
            console.log("тест с условием: " + znach[i].condition + " - не пройден");
        }
    }
    console.log("из " + znach.length + " тестов " + "пройдено " + count);
};
var H1 = { a: 5, b: { b1: 6, b2: 7 } };
var H2 = { b: { b1: 6, b2: 7 }, a: 5 };
var H3 = { a: 5, b: { b1: 6 } };
var H4 = { a: 5, b: { b1: 66, b2: 7 } };
var H5 = { a: 5, b: { b1: 6, b2: 7, b3: 8 } };
var H6 = { a: null, b: undefined, c: Number.NaN };
var H7 = { c: Number.NaN, b: undefined, a: null };
var H8 = { a: 5, b: 6 };
var H9 = { c: 5, d: 6 };
var H10 = { a: 5 };
var A1 = [5, 7];
var A2 = [5, 5, 7];
var A3 = [5, 8, 7];
var znach = [
    { condition: "deepComp(H1,H2) будет true", expr: deepComp(H1, H2), expectedResult: true },
    { condition: "deepComp(H1,H3) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(H1,H4) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(H1,H5) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(H6,H7) будет true", expr: deepComp(H1, H2), expectedResult: true },
    { condition: "deepComp(H8,H9) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(H8,H10) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(null,H10) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(H10,null) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(null,null) будет true", expr: deepComp(H1, H2), expectedResult: true },
    { condition: "deepComp(null,undefined) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(5,'5') будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(5,H1) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(A1,H1) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(A2,A3) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp( {a:5,b:undefined}, {a:5,c:undefined} ) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp([5,7],{0:5,1:7}) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp( [5,7],{0:5,1:7,length:2} ) будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp('aaa','bbb') будет false", expr: deepComp(H1, H2), expectedResult: false },
    { condition: "deepComp(Number.NaN,Number.NaN) будет true", expr: deepComp(H1, H2), expectedResult: true },
];
deepCompTests();