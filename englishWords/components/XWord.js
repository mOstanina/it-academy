"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';
import Word from './Word';
import './XWord.css';

class XWord extends React.PureComponent {

    static propTypes = {
        listOfWordToRender: PropTypes.array,
        cbShowCurrentDisplay: PropTypes.func, // колбэк возвращающий состояние кроссворда каждый раз когда оно меняется
        workMode: PropTypes.string,  //  режим работы (показ / показ с возможносью отгадывания)
    };
    //  listOfWordToRender - массив состоящий из:
    //      [
    //        i-0 - номер слова
    //        i-1 - горизонтальное / вертикальное расположение
    //        i-2 - координаты первой буквы (верхний левый угол)
    //        i-3 - само слово  
    //        i-4 - вид отображения слова (видимое/скрытое/отгаданное/)        
    //      ]

    state = {
        listOfWordToRender: this.props.listOfWordToRender,
        widthOfExternalContainer: 400
    };


    toFindSizeOfXWordContainer = () => {
        // определяем габариты компонента в координатах:
        // если слово вертикальное - прибавляем длинну слова к "Y"
        // если слово горизонтальное - прибавляем длинну слова к "X"
        // запоминаем максимальные "X" и "Y"
        let wordsInfo = [[], []]
        let maxX = 0
        let maxY = 0
        let coordinates = []
        let externalContainerWidth = this.state.widthOfExternalContainer
        let letterWidth = 0
        let arrayWords = this.props.listOfWordToRender

        //console.log(this.props.listOfWordToRender)

        for (let i = 0; i < arrayWords.length; i++) {

            let specification = {
                wordCode: null,
                wordName: null,
                wordOrientation: null,
                wordPosX: null,
                wordPosY: null,
                wordWidth: null,
                wordHeight: null,
            }

            specification.wordName = arrayWords[i][3];
            specification.wordPosX = arrayWords[i][2][0];
            specification.wordPosY = arrayWords[i][2][1];

            let wordLength = arrayWords[i][3].length // длина слова
            specification.wordCode = arrayWords[i][0]
            if (arrayWords[i][1] === "column") {
                specification.wordOrientation = "column";
                let wordY = arrayWords[i][2][1] + wordLength - 1 // координата "Y" последней буквы в слове
                specification.wordWidth = 1 // слово горизонтально имеет высоту в 1 клетку
                specification.wordHeight = wordLength // ширина в количестве клеток
                if (maxY < wordY) {
                    maxY = wordY
                }
            } else if (arrayWords[i][1] === "row") {
                specification.wordOrientation = "row";
                let wordX = arrayWords[i][2][0] + wordLength - 1 // координата "X" последней буквы в слове
                specification.wordWidth = wordLength // высота в количестве клеток
                specification.wordHeight = 1 // слово вертикальное имеет ширину в 1 клетку
                if (maxX < wordX) {
                    maxX = wordX
                }
            }
            wordsInfo[0].push(specification)
        }
        coordinates.push(maxX)
        coordinates.push(maxY)
        //console.log(coordinates)
        let maxXY = null
        if (maxX > maxY) {
            maxXY = maxX
        } else {
            maxXY = maxY
        }

        // определяем размер ячейки для буквы
        let cellBorderWidth = 1 // толщина границ обводки
        let cellWidth = (externalContainerWidth - ((maxXY + 1) + 1) * cellBorderWidth) / (maxXY + 1)
        wordsInfo[1].push({ cellWidth: cellWidth })
        let wordFontSize = cellWidth * 0.7
        wordsInfo[1].push({ wordFontSize: wordFontSize })

        return wordsInfo
    }

    componentDidMount() { }

    render() {
        let XWordContainerSize = this.toFindSizeOfXWordContainer()
        let listAllWords = XWordContainerSize[0].map((word, i) => {
            return <Word key={word.wordCode} wordCode={word.wordCode} wordName={word.wordName} wordOrientation={word.wordOrientation} wordPosX={word.wordPosX} wordPosY={word.wordPosY} wordHeight={word.wordHeight} wordWidth={word.wordWidth} wordFontSize={XWordContainerSize[1][1].wordFontSize} cellWidth={XWordContainerSize[1][0].cellWidth} wordMode={"visible"} />
        })
        return (
            <div className="container_for_crossword">
                {listAllWords}
            </div>
        );
    };
}
export default XWord;