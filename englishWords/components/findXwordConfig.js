import React from 'react';
function findXwordConfig(wordsArray) {
    let wordsOnTable=new Array(wordsArray.length - 1)// слова попавшие на экран
    // выбираем случайное слово из исходного массива
    function randomWord(n, m, array) {
        let i = Math.floor(Math.random() * (m - n + 1)) + n;
        //console.log(i)
        //console.log(array[i])
        if (array[i] === "0") {
            randomWord(n, m, array)
        } else {
            let b = array[i]
            array[i] = "0"
            // wordsOnTable.push([a,b])
            wordsOnTable[i]=[i,b]
            return b
        }
    }
    
    //console.log(wordsOnTable)
    let word1 = randomWord(0, wordsArray.length - 1, wordsArray)
    
    //console.log(wordsOnTable)
    //console.log(wordsArray)
   // return word1


}
export { findXwordConfig };