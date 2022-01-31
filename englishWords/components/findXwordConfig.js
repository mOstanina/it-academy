import React from 'react';
function findXwordConfig(wordsArray) {
    let wordsArrayLength = wordsArray.length

    let wordsOnTable = []    // слова попавшие на экран
    let occupiedCoordinatesArray = {} //координаты в которых размещены буквы
    let occupiedCoordinates = [] //координаты в которых размещены буквы
    let occupiedCoord = [] //координаты в которых размещены буквы
    let occupiedCoordinat = [] //координаты в которых размещены буквы только горизонтальных слов

    let disabletCoordinates = {   // запрещенные координаты
        "column": [],
        "row": []
    }
    let crossLettersCoord = []
    let startCoordinates = []
    //\\  1. ------ выбираем самое длинное слово из первоначального массива wordsArray ------ 

    function maxLengthWord(wordsArray) {
        let maxLengthWordInfo = {
            i: null,
            word: null,
            wordLength: 0,
        }
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length > maxLengthWordInfo.wordLength) {
                maxLengthWordInfo.i = i;
                maxLengthWordInfo.word = wordsArray[i];
                maxLengthWordInfo.wordLength = wordsArray[i].length
            }
        }
        return maxLengthWordInfo
    }

    let firstWordInfo = maxLengthWord(wordsArray)
    let firstWord = firstWordInfo.word

    //\\\\\\\\\\  2. ------ добавление занятых и запрнщенных координат в список ------


    function addOccupiedCoordinates(word, wordOrientation, startCoordinates) {
        let wordPosX = startCoordinates[0] // кооррд X повой буквы добавляемого на экран слова
        let wordPosY = startCoordinates[1]// кооррд Y повой буквы добавляемого на экран слова
        let ccodinates = [] // координаты X и Y
        let aarayCoor = [] //
        console.log(word.length)
        for (let i = 0; i < word.length; i++) {

            if (wordOrientation === "row") {
                wordPosX = startCoordinates[0] + i
                wordPosY = startCoordinates[1]
                if (i === 0) {
                    disabletCoordinates.row.push([wordPosX - 1, wordPosY])
                    occupiedCoordinat.push([wordPosX - 1, wordPosY])
                    disabletCoordinates.column.push([wordPosX - 1, wordPosY])
                }
                if (i === word.length - 1) {
                    disabletCoordinates.row.push([wordPosX + 1, wordPosY])
                    occupiedCoordinat.push([wordPosX + 1, wordPosY])
                    disabletCoordinates.column.push([wordPosX + 1, wordPosY])
                }
                occupiedCoord.push([word[i], [wordPosX, wordPosY]])

                disabletCoordinates.row.push([wordPosX, wordPosY], [wordPosX, wordPosY + 1], [wordPosX, wordPosY - 1]) // недопустимые для "ro"-слов
            } else if (wordOrientation === "column") {
                wordPosX = startCoordinates[0]
                wordPosY = startCoordinates[1] + i
                if (i === 0) {
                    disabletCoordinates.column.push([wordPosX, wordPosY - 1])
                    occupiedCoordinat.push([wordPosX, wordPosY - 1])
                    disabletCoordinates.row.push([wordPosX, wordPosY - 1])
                }
                if (i === word.length - 1) {
                    disabletCoordinates.column.push([wordPosX, wordPosY + 1])
                    occupiedCoordinat.push([wordPosX, wordPosY + 1])
                    disabletCoordinates.row.push([wordPosX, wordPosY + 1])
                }
                console.log(word[i])
                occupiedCoord.push([word[i], [wordPosX, wordPosY]])

                disabletCoordinates.column.push([wordPosX, wordPosY], [wordPosX + 1, wordPosY], [wordPosX - 1, wordPosY])// недопустимые для "column"-слов
            }
            occupiedCoordinat.push([wordPosX, wordPosY])
            ccodinates.push([wordPosX, wordPosY])
            occupiedCoordinatesArray[ccodinates[i]] = word[i]

            aarayCoor.push([ccodinates[i]])
        }
        occupiedCoordinates.push({ [word]: aarayCoor })//
    }
    //\\\\\\\\\\ 3.  ------ добавление слова в массив слов на экране ------
    function addWordOnTable(nameOfWord, orientation, posX, posY) {

        if (orientation === "row") {
            wordsOnTable.push({
                wordName: nameOfWord,
                // wordCode: null,
                wordOrientation: orientation,
                wordPosX: posX,
                wordPosY: posY,
                wordHeight: 1,
                wordWidth: nameOfWord.length,
            })
        } else if (orientation === "column") {
            wordsOnTable.push({
                wordName: nameOfWord,
                // wordCode: null,
                wordOrientation: orientation,
                wordPosX: posX,
                wordPosY: posY,
                wordHeight: nameOfWord.length,
                wordWidth: 1,
            })
        }
        let index = wordsArray.indexOf(nameOfWord)
        wordsArray.splice(index, 1)
        console.log(wordsArray)
        addOccupiedCoordinates(nameOfWord, orientation, [posX, posY])
    }

    addWordOnTable(firstWord, "row", 0, 0)
    startCoordinates = [[0, "row", [0, 0], firstWord, 'open']]


    //\\\\\\\\\\ 4.  ------ выбираем случайное слово из массива ------

    function randomWord(n, m, array) {
        console.log(array)
        let i = Math.floor(Math.random() * (m - n + 1)) + n;
        console.log(i)
        console.log(array[i])

        //проверяем есть ли совападвния по буквам
        let randomWordFromArray = array[i]  //   - рандомное слово из массива

        //\\\\\\\\\\ 5. ------ выбираем случайное слово из массива слов которые уже попали на экран ------

        function random(n, m, array) {
            console.log(array)
            let s = Math.floor(Math.random() * (m - n + 1)) + n;
            console.log(s)
            console.log(array[s])
            return s
        }
        let f = random(0, wordsOnTable.length - 1, wordsOnTable)

        //\\\\\\\\\\ 5. ------ ищем совпадения букв------
        console.log(randomWordFromArray.toUpperCase())
        let arrayOfMatches = [] // массив совпаданий букв
        console.log(randomWordFromArray)// слово из массива оставшихся слов
        console.log(wordsOnTable) // массив слов уже на экране
        console.log(wordsOnTable[f].wordName)
        var countOfMatches = 0
        console.log(wordsArray)
        function findMatches() {
            for (let i = 0; i < randomWordFromArray.length; i++) {
                var letterMatchAr = []

                for (let j = 0; j < wordsOnTable[f].wordName.length; j++) {
                    if (randomWordFromArray[i] === wordsOnTable[f].wordName[j]) {
                        countOfMatches++
                        letterMatchAr.push([randomWordFromArray[i], occupiedCoordinates[f][wordsOnTable[f].wordName][j][0]])
                    }
                }
                arrayOfMatches.push(letterMatchAr)
            }
        }
        findMatches()
        while (countOfMatches === 0) {
            arrayOfMatches = []
            f = random(0, wordsOnTable.length - 1, wordsOnTable)
            findMatches()
        }
        let letterOnCross = [] // массив букв пересечения
        function randomLetter(a, b, word) {
            console.log(word)
            let e = Math.floor(Math.random() * (b - a + 1)) + a;
            console.log(arrayOfMatches[e])
            if (arrayOfMatches[e].length === 0) {
                randomLetter(a, b, word)
            } else {
                letterOnCross.push([arrayOfMatches[e][0], e]) //  e - это номер буквы
            }
            return letterOnCross
        }
        randomLetter(0, arrayOfMatches.length - 1, arrayOfMatches)

        //\\\\\\\\\\ 6. ------ находим координаты первой буквы слова и ориентацию самого слова

        let orienOfFirstWord = wordsOnTable[f].wordOrientation
        let orienOfSecondWord = null
        let x = null
        let y = null
        if (orienOfFirstWord === "row") {
            orienOfSecondWord = "column"
            x = letterOnCross[0][0][1][0]
            y = letterOnCross[0][0][1][1] - letterOnCross[0][1]

        } else if (orienOfFirstWord === "column") {
            orienOfSecondWord = "row"
            x = letterOnCross[0][0][1][0] - letterOnCross[0][1]
            y = letterOnCross[0][0][1][1]

        }
        //\\\\\\\\\\ 7. ------ проверяем чтобы совпадали буквы при пересечении с остальными словами

        function checkLetter(wordToCheck, x, y, wordOrientation) {

            let disabletHorizontal = disabletCoordinates.row // запрещенные координаты для горизонтальных слов
            let disabletVertical = disabletCoordinates.column  // запрещенные координаты для вертикальных слов

            let disabletLettersCounter = 0
            for (let i = 0; i < wordToCheck.length; i++) {

                console.log(wordToCheck[i])
                if (i === 0 && (wordOrientation === "row")) {

                    for (let e = 0; e < occupiedCoordinat.length; e++) {
                        if ((occupiedCoordinat[e][0] === (x - 1)) && (occupiedCoordinat[e][1] === y)) {
                            disabletLettersCounter++
                        }
                    }
                }
                if (i === 0 && (wordOrientation === "column")) {

                    for (let e = 0; e < occupiedCoordinat.length; e++) {
                        if ((occupiedCoordinat[e][0] === (x)) && (occupiedCoordinat[e][1] === (y - 1))) {
                            disabletLettersCounter++
                        }
                    }
                }
                if (i === (wordToCheck.length - 1) && (wordOrientation === "row")) {

                    for (let e = 0; e < occupiedCoordinat.length; e++) {
                        if ((occupiedCoordinat[e][0] === (x + i + 1)) && (occupiedCoordinat[e][1] === y)) {
                            disabletLettersCounter++
                        }
                    }
                }
                if (i === (wordToCheck.length - 1) && (wordOrientation === "column")) {

                    for (let e = 0; e < occupiedCoordinat.length; e++) {
                        if ((occupiedCoordinat[e][0] === (x)) && (occupiedCoordinat[e][1] === (y + i + 1))) {
                            disabletLettersCounter++
                        }
                    }
                }
                for (let m = 0; m < occupiedCoord.length; m++) {

                    if (wordOrientation === "row") {
                        if ((occupiedCoord[m][1][0] === (x + i)) && (occupiedCoord[m][1][1] === (y)) && (wordToCheck[i] !== occupiedCoord[m][0])) {
                            disabletLettersCounter++
                        } else {
                            for (let j = 0; j < disabletHorizontal.length; j++) {

                                if (disabletHorizontal.length === 0) {

                                } else {
                                    if (disabletHorizontal[j][0] === (x + i) && disabletHorizontal[j][1] === y) {

                                        disabletLettersCounter++

                                    }
                                }
                            }
                        }
                    }

                    if (wordOrientation === "column") {
                        if ((occupiedCoord[m][1][0] === (x)) && (occupiedCoord[m][1][1] === (y + i)) && (wordToCheck[i] !== occupiedCoord[m][0])) {
                            disabletLettersCounter++
                        } else {
                            for (let j = 0; j < disabletVertical.length; j++) {

                                if (disabletVertical.length === 0) {

                                } else {
                                    if (disabletVertical[j][0] === x && disabletVertical[j][1] === (y + i)) {

                                        disabletLettersCounter++
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (disabletLettersCounter === 0) {
                startCoordinates.push([null, orienOfSecondWord, [x, y], randomWordFromArray, "open"]) //
                addWordOnTable(randomWordFromArray, orienOfSecondWord, x, y)
                crossLettersCoord.push(letterOnCross)
                disabletCoordinates.row = disabletHorizontal
                disabletCoordinates.column = disabletVertical
            }
        }

        checkLetter(randomWordFromArray, x, y, orienOfSecondWord)

        return startCoordinates
    }


    while (wordsOnTable.length < wordsArrayLength) {
        randomWord(0, wordsArray.length - 1, wordsArray)
    }

    //\\\\\\\\\\ 8. ------ переназначаю координаты слов  ------
    let minX = 0
    let minY = 0
    function findSizeOfCrosswordArea(x, y) {
        if (x < minX) {
            minX = x
        }
        if (y < minY) {
            minY = y
        }
    }

    for (let i = 0; i < startCoordinates.length; i++) {
        findSizeOfCrosswordArea(startCoordinates[i][2][0], startCoordinates[i][2][1])
    }

    for (let i = 0; i < startCoordinates.length; i++) {
        startCoordinates[i][2][0] = startCoordinates[i][2][0] + Math.abs(minX)
        startCoordinates[i][2][1] = startCoordinates[i][2][1] + Math.abs(minY)

    }
    console.log(startCoordinates)
    //\\\\\\\\\\ 9. ------ переназначаю номера слов  ------

    startCoordinates.sort(function (a, b) {
        return (a[2][0] - b[2][0])
    })
    startCoordinates.sort(function (a, b) {
        return (a[2][1] - b[2][1])
    })

    for (let i = 0; i < startCoordinates.length; i++) {
        startCoordinates[i][0] = i + 1
    }

    return startCoordinates;
}
export { findXwordConfig };