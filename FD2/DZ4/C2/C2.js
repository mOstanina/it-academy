function deepCopy(value) {
    var clon;
    if (typeof value !== "object") {
        clon = value;
    } else if (typeof value == null) {
        clon = value;
        console.log(clon);
    } else if (Array.isArray(value)) {
        clon = [];
        for (var i = 0; i < value.length; i++) {
            if (typeof value !== "object") {
                clon[i] = value[i];
            } else {
                clon[i] = deepCopy(value[i]);
            }
        };
    } else if (typeof value == "object") {
        clon = {};
        for (var key in value) {
            if (typeof value !== "object") {
                clon[key] = value[key];
            } else {
                clon[key] = deepCopy(value[key]);
            }
        }
    }
    return clon;
};
// тесты
function deepCopyTests(test) {
    var count = 0;
    for (var i = 0; i < znach.length; i++) {
        if (znach[i].expr === znach[i].expectedResult) {
            console.log("тест пройден")
            count++
        } else {
            console.log("тест не пройден")
        }
    }
    console.log("из " + znach.length + " тестов " + "пройдено " + count);
};
var h1 = { a: 5, b: { b1: 6, b2: 7 }, c: [33, 22], d: null, e: undefined, f: Number.NaN };
var h2 = deepCopy(h1);
var znach = [
    { expr: h1 === h2, expectedResult: false },
    { expr: h1.a === h2.a, expectedResult: true },
    { expr: h1.b === h2.b, expectedResult: false },
    { expr: ((h1.b.b1) === (h2.b.b1)), expectedResult: true },
    { expr: h1.c === h2.c, expectedResult: true },
    { expr: h1.c[0] === h2.c[0], expectedResult: false },
    { expr: h1.d === h2.d, expectedResult: true },
    { expr: h1.e === h2.e, expectedResult: true },
    { expr: isNaN(h2.f), expectedResult: true },
    { expr: (h2.c instanceof Array), expectedResult: true }
];
console.log("ПЕРВОЕ ТЕСТИРОВАНИЕ");
deepCopyTests(h1);
var a1 = [5, { b1: 6, b2: 7 }, [33, 22], null, undefined, Number.NaN];
var a2 = deepCopy(a1);
var znach = [
    { expr: a1 === a2, expectedResult: false },
    { expr: typeof (a2) === typeof (a1), expectedResult: true },
    { expr: a1[0] === a2[0], expectedResult: true },
    { expr: a1[1] === a2[1], expectedResult: false },
    { expr: a1[1].b1 === a2[1].b1, expectedResult: true },
    { expr: a1[2] === a2[2], expectedResult: false },
    { expr: a1[2][0] === a2[2][0], expectedResult: true },
    { expr: a1[3] === a2[3], expectedResult: true },
    { expr: a1[4] === a2[4], expectedResult: true },
    { expr: isNaN(a2[5]), expectedResult: true },
    { expr: (a2[2] instanceof Array), expectedResult: true }
];
console.log("ВТОРОЕ ТЕСТИРОВАНИЕ");
deepCopyTests(a1);
var v1 = "sss";
var v2 = deepCopy(v1);
var znach = [
    { expr: typeof (v2) === typeof (v1), expectedResult: true },
    { expr: v1 === v2, expectedResult: true }
];
console.log("ТРЕТЬЕ ТЕСТИРОВАНИЕ");
deepCopyTests(v1);
var z1 = null;
var z2 = deepCopy(z1);
var znach = [
    { expr: typeof (z2) === typeof (z1), expectedResult: true },
    { expr: z1 === z2, expectedResult: true }
];
console.log("ЧЕТВЕРТОЕ ТЕСТИРОВАНИЕ");
deepCopyTests(z1);
var n1 = Number.NaN;
var n2 = deepCopy(n1);
var znach = [
    { expr: typeof (n2) === typeof (n1), expectedResult: true },
    { expr: isNaN(n2), expectedResult: true }
];
console.log("ПЯТОЕ ТЕСТИРОВАНИЕ");
deepCopyTests(n1);