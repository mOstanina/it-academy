import React from 'react';
function findXwordConfig(wordsArray) {
    let wordsArrayLength = wordsArray.length
    let finalArrayOfWords = []; // массив, который вернет функция

    // каждый элемент массива finalArrayOfWords это хэш вида:
    // {
    //   wordName: "train",
    //   wordCode: 1,   // присваиваю в конце в зависимости откоординат
    //   wordHeight: 5, // присваиваю в конце "= дина" слва или "=1" в зависимости от горионтальное или вертикальное
    //   wordWidth: 1   // присваиваю в конце "= дина" слва или "=1" в зависимости от горионтальное или вертикальное
    //   wordOrientation: "column",
    //   wordPosX: 4,
    //   wordPosY: 0,
    // }

    let wordsOnTable = []    // слова попавшие на экран
    let occupiedCoordinates = [] //координаты в которых размещены буквы
    let disabletCoordinates = {   // запрещенные координаты
        "vertical": [],
        "horizontal": []
    }
    //\\ ------ выбираем самое длинное слово из первоначального массива wordsArray ------ 

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
    let firstWordInfo = null
    let firstWord = null
    firstWordInfo = maxLengthWord(wordsArray)
    firstWord = firstWordInfo.word
    // добавляем превое слово в массив слов на экране
    // wordsOnTable.push({
    //     wordName: firstWord,
    //     wordCode: null,
    //     wordHeight: 1,
    //     wordWidth: firstWord.length,
    //     wordOrientation: "horizontal",
    //     wordPosX: 0,
    //     wordPosY: 0,
    // })
    // console.log(wordsOnTable)
    // wordsArray[firstWordInfo.i] = "0" // заменяем первое слово на "0" типа как удаляем его


    //\\\\\\\\\\ ------ добавление занятых и запрнщенных координат в список ------

    function addOccupiedCoordinates(word, wordOrientation, startCoordinates) {
        let wordPosX = null
        let wordPosY = null
        let ccodinates = []
        let aarayCoor = []
        for (let i = 0; i < word.length; i++) {
            if (wordOrientation === "horizontal") {
                wordPosX = startCoordinates[0] + i
                wordPosY = startCoordinates[1]

                ccodinates.push([wordPosX, wordPosY])
                // occupiedCoordinates.push({[word]:ccodinates})
                disabletCoordinates.horizontal.push([wordPosX, wordPosY + 1], [wordPosX, wordPosY - 1])

            } else if (wordOrientation === "vertical") {
                wordPosX = startCoordinates[0]
                wordPosY = startCoordinates[1] + i
                ccodinates.push([wordPosX, wordPosY])
                //occupiedCoordinates[word].push([wordPosX, wordPosY])
                disabletCoordinates.vertical.push([wordPosX + 1, wordPosY], [wordPosX - 1, wordPosY])
            }
            // aarayCoor.push([{[word[i]]:ccodinates[i]}])
            aarayCoor.push([ccodinates[i]])
        }
        console.log(aarayCoor)
        //occupiedCoordinates.push({ [word]: ccodinates })
        occupiedCoordinates.push({ [word]: aarayCoor })
        console.log(occupiedCoordinates)
        console.log(disabletCoordinates)
    }
    //\\\\\\\\\\ ------ добавление слова в массив слов на экране ------
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
        console.log(index)
        console.log(wordsArray[index])
        // wordsArray[index] = "0" // заменяем первое слово на "0" типа как удаляем его

        console.log(wordsArray)
        wordsArray.splice(index, 1)
        console.log(wordsArray)
        addOccupiedCoordinates(nameOfWord, orientation, [posX, posY])
    }

    addWordOnTable(firstWord, "horizontal", 0, 0)
    console.log(wordsArray)
    console.log(wordsOnTable)
    let startCoordinates = []

    startCoordinates = [[0, "horizontal", [0, 0], firstWord, 'open']]


    //\\\\\\\\\\ ------ выбираем случайное слово из массива ------

    // let count = wordsOnTable.length; // wordsOnTable.length счетчик для количества переборов слов в зависимости от количества добавленных на экран слов 
    // let snapshotOIteration = {} //на каждой итерации выбора слова будем получать информацию о нем

    //let word1
    function randomWord(n, m, array) {
        console.log(array)
        let i = Math.floor(Math.random() * (m - n + 1)) + n;
        console.log(i)
        console.log(array[i])

        //проверяем есть ли совападвния по буквам
        let randomWordFromArray = array[i]  //   - рандомное слово из массива

        //\\\\\\\\\\ ------ выбираем случайное слово из массива слов которые уже попали на экран ------

        function random(n, m, array) {
            console.log(array)
            let s = Math.floor(Math.random() * (m - n + 1)) + n;
            console.log(s)
            console.log(array[s])
            return s
        }
        let f = random(0, wordsOnTable.length - 1, wordsOnTable)
        console.log(f)

        //let f = 0 // условный индекс
        console.log(wordsOnTable[f].wordName.split(""))
        let arrayOfMatches = [] // массив совпаданий букв
        console.log(randomWordFromArray)
        console.log(wordsOnTable)
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
            f = random(0, wordsOnTable.length - 1, wordsOnTable)
            findMatches()
        }
        console.log(occupiedCoordinates[f][wordsOnTable[f].wordName])
        console.log(arrayOfMatches)

        console.log(arrayOfMatches)
        // ///////////  -- нужно удалить +/-
        // if (arrayOfMatches.some(function (item) {
        //     return item.length > 0
        // })) {
        //     snapshotOIteration[count] = arrayOfMatches
        //     console.log(snapshotOIteration)
        // }
        // /////////// 
        let letterOnCross = []
        function randomLetter(a, b, word) {
            // let letterOnCrossInfo = []
            let e = Math.floor(Math.random() * (b - a + 1)) + a;
            console.log(arrayOfMatches[e])
            if (arrayOfMatches[e].length === 0) {
                randomLetter(a, b, word)
            } else {

                letterOnCross.push([arrayOfMatches[e][0], e]) //  j - это номер буквы
            }
            return letterOnCross
        }
        console.log(arrayOfMatches)
        randomLetter(0, arrayOfMatches.length - 1, arrayOfMatches)
        console.log(letterOnCross)


        //  находим координаты первой дуквы слова и ориентацию самого слова

        console.log(wordsOnTable[f].wordOrientation)

        let orienOfFirstWord = wordsOnTable[f].wordOrientation
        let orienOfSecondWord = null
        // let startCoordinates = []
        // let listOfWordToRender = [
        //     [1, "vertical", [4, 0], "train", "open"],
        //     [2, "vertical", [7, 0], "elephant", "open"],
        //     [3, "horizontal", [0, 3], "missisipi", "open"],
        //     [4, "vertical", [2, 3], "sea", "open"],
        //     [5, "horizontal", [5, 6], "leni", "open"],
        // ];
        let x = null
        let y = null
        if (orienOfFirstWord === "horizontal") {
            orienOfSecondWord = "vertical"
            console.log(letterOnCross[0][1])
            console.log(letterOnCross[0][0][1][1])
            x = letterOnCross[0][0][1][0]
            y = letterOnCross[0][0][1][1] - letterOnCross[0][1]
            startCoordinates.push([wordsOnTable.length, orienOfSecondWord, [x, y], randomWordFromArray, "open"])
            addWordOnTable(randomWordFromArray, orienOfSecondWord, x, y)
            console.log(wordsArray)
            console.log(wordsOnTable)
        } else {
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


        //console.log(word1)
        //   finalArrayOfWords.push(word1)
        console.log(finalArrayOfWords)
        console.log(wordsOnTable)
        console.log(wordsArray)

        return startCoordinates

    }
    //finalArrayOfWords.push(randomWord(0, wordsArray.length - 1, wordsArray))
    //console.log(wordsOnTable)
    //    word1 = randomWord(0, wordsArray.length - 1, wordsArray)
    //    console.log(word1)
    //console.log(wordsOnTable)
    //console.log(wordsArray)
    // return word1

    randomWord(0, wordsArray.length - 1, wordsArray)
    while (wordsOnTable.length < wordsArrayLength) {
        //word1 =  randomWord(0, wordsArray.length - 1, wordsArray)
        randomWord(0, wordsArray.length - 1, wordsArray)
        // finalArrayOfWords.push(wo)
        console.log(wordsOnTable.length)
        console.log(wordsOnTable)
        console.log(wordsArrayLength)
        console.log(finalArrayOfWords)
    }
    //return finalArrayOfWords;
    //     if (wordsOnTable.length < wordsArrayLength) {
    //        // word1 = randomWord(0, wordsArray.length - 1, wordsArray)
    //        let wo=randomWord(0, wordsArray.length - 1, wordsArray)
    //         finalArrayOfWords.push(wo)
    //         console.log(finalArrayOfWords)
    //         console.log("rrrrrrrrrrrrrrrrrr")
    //     } else {
    //         console.log(finalArrayOfWords)
    // console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    //         return finalArrayOfWords;
    //     }

    console.log(wordsOnTable.length)
    console.log(wordsArrayLength)
    console.log(finalArrayOfWords)
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
   
    for (let i=0; i < startCoordinates.length; i++) {
        findSizeOfCrosswordArea(startCoordinates[i][2][0], startCoordinates[i][2][1])
    }

    console.log(minX)
    console.log(minY)
    console.log(startCoordinates)
    for (let i=0; i < startCoordinates.length; i++) {
        startCoordinates[i][2][0] =startCoordinates[i][2][0]+Math.abs(minX) 
        startCoordinates[i][2][1]=startCoordinates[i][2][1]+Math.abs(minY)
    }
    console.log(startCoordinates)
    return startCoordinates;
}
export { findXwordConfig };