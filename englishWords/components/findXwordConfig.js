import React from 'react';
function findXwordConfig(wordsArray) {
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
        wordsArray[index] = "0" // заменяем первое слово на "0" типа как удаляем его

        addOccupiedCoordinates(nameOfWord, orientation, [posX, posY])
    }

    addWordOnTable(firstWord, "horizontal", 0, 0)
    console.log(wordsArray)
    console.log(wordsOnTable)



    //\\\\\\\\\\ ------ выбираем случайное слово из массива ------

    // let count = wordsOnTable.length; // wordsOnTable.length счетчик для количества переборов слов в зависимости от количества добавленных на экран слов 
    // let snapshotOIteration = {} //на каждой итерации выбора слова будем получать информацию о нем
    let startCoordinates = []
    function randomWord(n, m, array) {
        console.log(array)
        let i = Math.floor(Math.random() * (m - n + 1)) + n;
        console.log(i)
        console.log(array[i])
        if (array[i] === "0") {
            randomWord(n, m, array)
        } else {
            //проверяем есть ли совападвния по буквам
            let randomWordFromArray = array[i]  //   - рандомное слово из массива

            //////22222
            /////\\\\\\!!!!!!!!!!! тут добавить проверку по всему массиву слов на экране!!!!!!!!!222222222
            //////22222
            function random(n, m, array) {
                console.log(array)
                let i = Math.floor(Math.random() * (m - n + 1)) + n;
                console.log(i)
                console.log(array[i])
                return i
            }
            let f = random(0, wordsOnTable.length - 1, wordsOnTable)
            console.log(f)

            //let f = 0 // условный индекс
            console.log(wordsOnTable[f].wordName.split(""))
            let arrayOfMatches = [] // массив совпаданий букв
            console.log(randomWordFromArray)
            console.log(wordsOnTable)
            console.log(wordsOnTable[f].wordName)

            for (let i = 0; i < randomWordFromArray.length; i++) {
                var letterMatchAr = []
                for (let j = 0; j < wordsOnTable[f].wordName.length; j++) {
                    if (randomWordFromArray[i] === wordsOnTable[f].wordName[j]) {
                        letterMatchAr.push([randomWordFromArray[i], occupiedCoordinates[f][wordsOnTable[f].wordName][j][0]])
                    }
                }

                arrayOfMatches.push(letterMatchAr)
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
                let j = Math.floor(Math.random() * (b - a + 1)) + a;
                console.log(arrayOfMatches[j])
                if (arrayOfMatches[j].length === 0) {
                    randomLetter(a, b, word)
                } else {

                    letterOnCross.push([arrayOfMatches[j][0], j]) //  j - это номер буквы
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
                y = letterOnCross[0][0][1][1] + letterOnCross[0][1]
                startCoordinates.push([null, orienOfSecondWord, [x, y], randomWordFromArray, "open"])
                addWordOnTable(randomWordFromArray, orienOfSecondWord, x, y)
                console.log(wordsArray)
                console.log(wordsOnTable)
            } else {
                orienOfSecondWord = "horizontal"
                console.log(letterOnCross[0][1])
                console.log(letterOnCross[0][0][1][1])
                x = letterOnCross[0][0][1][1]
                y = letterOnCross[0][0][1][0] + letterOnCross[0][1]
                startCoordinates.push([null, orienOfSecondWord, [x, y], randomWordFromArray, "open"])
                addWordOnTable(randomWordFromArray, orienOfSecondWord, x, y)
                console.log(wordsArray)
                console.log(wordsOnTable)
            }



            // !!!!! добавить слово в массив 

            console.log(startCoordinates)
            return startCoordinates
        }
        return startCoordinates 
    }

    //console.log(wordsOnTable)
    let word1 = randomWord(0, wordsArray.length - 1, wordsArray)
    console.log(word1)
    //console.log(wordsOnTable)
    //console.log(wordsArray)
    // return word1
    finalArrayOfWords.push(word1)
    console.log(finalArrayOfWords)
    console.log(wordsOnTable)
    console.log(wordsArray)

    // while(wordsOnTable.length < wordsArray.length){
    //     word1 =  randomWord(0, wordsArray.length - 1, wordsArray)
    // }
    //return finalArrayOfWords;
    if (wordsOnTable.length < wordsArray.length) {
        word1 = randomWord(0, wordsArray.length - 1, wordsArray)
    } else {
        console.log(finalArrayOfWords)

        return finalArrayOfWords;
    }
    // return finalArrayOfWords;
    console.log(finalArrayOfWords)
}
export { findXwordConfig };