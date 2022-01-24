import React from 'react';
function findXwordConfig(wordsArray) {
    let wordsArrayLength = wordsArray.length

    let wordsOnTable = []    // слова попавшие на экран
    let occupiedCoordinatesArray = {} //координаты в которых размещены буквы
    let occupiedCoordinates = [] //координаты в которых размещены буквы
    let disabletCoordinates = {   // запрещенные координаты
        "vertical": [],
        "horizontal": []
    }
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

    // function addOccupiedCoordinates(word, wordOrientation, startCoordinates) {
    //     let wordPosX = null // кооррд X повой буквы добавляемого на экран слова
    //     let wordPosY = null// кооррд Y повой буквы добавляемого на экран слова
    //     let ccodinates = []
    //     let aarayCoor = []
    //     for (let i = 0; i < word.length; i++) {
    //         if (wordOrientation === "horizontal") {
    //             wordPosX = startCoordinates[0] + i
    //             wordPosY = startCoordinates[1]

    //             ccodinates.push([wordPosX, wordPosY])
    //             disabletCoordinates.horizontal.push([wordPosX, wordPosY + 1], [wordPosX, wordPosY - 1]) // недопустимые для "horizontal"-слов

    //         } else if (wordOrientation === "vertical") {
    //             wordPosX = startCoordinates[0]
    //             wordPosY = startCoordinates[1] + i
    //             ccodinates.push([wordPosX, wordPosY])
    //             disabletCoordinates.vertical.push([wordPosX + 1, wordPosY], [wordPosX - 1, wordPosY])// недопустимые для "vertical"-слов
    //         }
    //         aarayCoor.push([ccodinates[i]])
    //     }
    //     console.log(aarayCoor)
    //     occupiedCoordinates.push({ [word]: aarayCoor })
    //     console.log(occupiedCoordinates)
    //     console.log(disabletCoordinates)
    // }
    function addOccupiedCoordinates(word, wordOrientation, startCoordinates) {
        let wordPosX = startCoordinates[0] // кооррд X повой буквы добавляемого на экран слова
        let wordPosY = startCoordinates[1]// кооррд Y повой буквы добавляемого на экран слова
        let ccodinates = [] // координаты X и Y
        let aarayCoor = [] //
        for (let i = 0; i < word.length; i++) {

            if (wordOrientation === "horizontal") {
                wordPosX = startCoordinates[0] + i
                wordPosY = startCoordinates[1]
                if (i === 0) {
                    disabletCoordinates.horizontal.push([wordPosX - 1, wordPosY])
                }
                if (i === word.length - 1) {
                    disabletCoordinates.horizontal.push([wordPosX + 1, wordPosY])
                }
                //ccodinates.push([wordPosX, wordPosY]) //
                disabletCoordinates.horizontal.push([wordPosX, wordPosY], [wordPosX, wordPosY + 1], [wordPosX, wordPosY - 1]) // недопустимые для "horizontal"-слов
            } else if (wordOrientation === "vertical") {
                wordPosX = startCoordinates[0]
                wordPosY = startCoordinates[1] + i
                if (i === 0) {
                    disabletCoordinates.horizontal.push([wordPosX, wordPosY - 1])
                }
                if (i === word.length - 1) {
                    disabletCoordinates.horizontal.push([wordPosX, wordPosY + 1])
                }
                //ccodinates.push([wordPosX, wordPosY]) //
                disabletCoordinates.vertical.push([wordPosX, wordPosY], [wordPosX + 1, wordPosY], [wordPosX - 1, wordPosY])// недопустимые для "vertical"-слов
            }
            ccodinates.push([wordPosX, wordPosY])
            // console.log(ccodinates)
            occupiedCoordinatesArray[[wordPosX, wordPosY]] = word[i]

            aarayCoor.push([ccodinates[i]])
        }
        console.log(occupiedCoordinatesArray)
        console.log(Object.keys(occupiedCoordinatesArray))
        console.log(ccodinates)
        console.log(aarayCoor)//
        occupiedCoordinates.push({ [word]: aarayCoor })//
        console.log(occupiedCoordinates)
        console.log(disabletCoordinates)
    }
    //\\\\\\\\\\ 3.  ------ добавление слова в массив слов на экране ------
    function addWordOnTable(nameOfWord, orientation, posX, posY) {

        if (orientation === "horizontal") {
            wordsOnTable.push({
                wordName: nameOfWord,
                // wordCode: null,
                wordOrientation: orientation,
                wordPosX: posX,
                wordPosY: posY,
                wordHeight: 1,
                wordWidth: nameOfWord.length,
            })
        } else if (orientation === "vertical") {
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

    addWordOnTable(firstWord, "horizontal", 0, 0)
    console.log(wordsArray)
    console.log(wordsOnTable)
    let startCoordinates = []


    startCoordinates = [[0, "horizontal", [0, 0], firstWord, 'open']]


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
        console.log(f)

        console.log(wordsOnTable[f].wordName.split(""))

        //\\\\\\\\\\ 5. ------ ищем совпадения букв------

        let arrayOfMatches = [] // массив совпаданий букв
        console.log(randomWordFromArray)// слово из массива оставшихся слов
        console.log(wordsOnTable) // массив слов уже на экране
        console.log(wordsOnTable[f].wordName)
        var countOfMatches = 0
        function findMatches() {
            for (let i = 0; i < randomWordFromArray.length; i++) {
                var letterMatchAr = []

                for (let j = 0; j < wordsOnTable[f].wordName.length; j++) {
                    if (randomWordFromArray[i] === wordsOnTable[f].wordName[j]) {
                        countOfMatches++
                        letterMatchAr.push([randomWordFromArray[i], occupiedCoordinates[f][wordsOnTable[f].wordName][j][0]])
                    }
                }
                console.log(countOfMatches)
                arrayOfMatches.push(letterMatchAr)
            }
        }
        findMatches()
        while (countOfMatches === 0) {
            arrayOfMatches = []
            f = random(0, wordsOnTable.length - 1, wordsOnTable)
            findMatches()
        }
        console.log(occupiedCoordinates[f][wordsOnTable[f].wordName])
        console.log(arrayOfMatches)

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
            console.log(letterOnCross)
            return letterOnCross
        }
        console.log(arrayOfMatches)
        randomLetter(0, arrayOfMatches.length - 1, arrayOfMatches)
        console.log(letterOnCross)


        //  находим координаты первой буквы слова и ориентацию самого слова

        console.log(wordsOnTable[f].wordOrientation)

        let orienOfFirstWord = wordsOnTable[f].wordOrientation
        let orienOfSecondWord = null

        let x = null
        let y = null
        if (orienOfFirstWord === "horizontal") {
            orienOfSecondWord = "vertical"
            console.log(letterOnCross[0][1])
            console.log(letterOnCross[0][0][1][0])
            console.log(letterOnCross[0][0][1][1])
            x = letterOnCross[0][0][1][0]
            y = letterOnCross[0][0][1][1] - letterOnCross[0][1]
            console.log(x)
            console.log(y)
            startCoordinates.push([wordsOnTable.length, orienOfSecondWord, [x, y], randomWordFromArray, "open"])
            console.log(startCoordinates)
            addWordOnTable(randomWordFromArray, orienOfSecondWord, x, y)
            console.log(wordsArray)
            console.log(wordsOnTable)
        } else if (orienOfFirstWord === "vertical") {
            orienOfSecondWord = "horizontal"
            console.log(letterOnCross[0][1])
            console.log(letterOnCross[0][0][1][1])
            x = letterOnCross[0][0][1][0] - letterOnCross[0][1]
            y = letterOnCross[0][0][1][1]
            startCoordinates.push([wordsOnTable.length, orienOfSecondWord, [x, y], randomWordFromArray, "open"])
            addWordOnTable(randomWordFromArray, orienOfSecondWord, x, y)
            console.log(wordsArray)
            console.log(wordsOnTable)
        }



        // !!!!! добавить слово в массив 

        console.log(startCoordinates)

        console.log(wordsOnTable)
        console.log(wordsArray)

        return startCoordinates

    }

    //console.log(wordsOnTable)
    //    word1 = randomWord(0, wordsArray.length - 1, wordsArray)
    //    console.log(word1)
    //console.log(wordsOnTable)
    //console.log(wordsArray)
    // return word1

    randomWord(0, wordsArray.length - 1, wordsArray)
    while (wordsOnTable.length < wordsArrayLength) {
        randomWord(0, wordsArray.length - 1, wordsArray)

        console.log(wordsOnTable.length)
        console.log(wordsOnTable)
        console.log(wordsArrayLength)
    }

    console.log(wordsOnTable.length)
    console.log(wordsArrayLength)
    console.log(startCoordinates)
    //\\\\\\\\\\ ------ переназначаю координаты слов  ------
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

    console.log(minX)
    console.log(minY)
    console.log(startCoordinates)
    for (let i = 0; i < startCoordinates.length; i++) {
        startCoordinates[i][2][0] = startCoordinates[i][2][0] + Math.abs(minX)
        startCoordinates[i][2][1] = startCoordinates[i][2][1] + Math.abs(minY)
    }
    console.log(startCoordinates)
    return startCoordinates;
}
export { findXwordConfig };