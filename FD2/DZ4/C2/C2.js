function deepCopy(value) {
    var clon;
    var types = {
        "number": true,
        "string": true,
        "boolean": true,
        undefined: true,
        null: true,
    };
    if (typeof value in types) {
        clon = value;
        console.log(clon);
        return clon;
    } else if (Array.isArray(value)) {
        for (var elOfArray of value) {
            if (typeof elOfArray in types) {
                clon = value;
            } else {
                clon = deepCopy(elOfArray);
            }
        };
        clon = value;
        console.log(clon);
        return clon;
    } else if (typeof value == "object") {
        clon = {};
        for (var key in value) {
            if (typeof key in types) {
                clon[key] = value[key];
            } else {
                clon[key] = deepCopy(value[key])
            }
        }
        console.log(clon);
    }
    return clon;
};
// тест
function deepCopyTests() {
    var h1 = { a: 5, b: { b1: 6, b2: 7 }, c: [33, 22], d: null, e: undefined, f: Number.NaN };
    console.log(h1);
    var h2 = deepCopy(h1);
    var znach1 = [!(h1 === h2), (h1.a === h2.a), !(h1.b === h2.b), ((h1.b.b1) === (h2.b.b1)), (h1.c === h2.c), (h1.c[0] === h2.c[0]), (h1.d === h2.d), (h1.e === h2.e), (isNaN(h2.f)), (h2.c instanceof Array)];
    console.log(znach1);
    var count = 0;
    for (var i = 0; i < znach1.length; i++) {
        if (znach1[i] == true) {
            console.log("тест пройден")
            count++
        } else {
            console.log("тест не пройден")
        }
    }
    console.log("из " + znach1.length + " тестов " + "пройдено " + count);
};
deepCopyTests();