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

    toFindSizeOfExternalContainer = () => {

        // function getElementPos(elem) {
        //     var bbox=elem.getBoundingClientRect();
        //     return {
        //         left: bbox.left+window.pageXOffset,
        //         top: bbox.top+window.pageYOffset
        //     };
        // }
        // var el = document.getElementById('external_container');
        // let a=getElementPos(el)
        // console.log(a)

        //console.log(el.clientHeight)
        console.log(this.state.listOfWordToRender)
        return 111
    }
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
            if (arrayWords[i][1] === "vertical") {
                specification.wordOrientation = "column";
                let wordY = arrayWords[i][2][1] + wordLength - 1 // координата "Y" последней буквы в слове
                specification.wordWidth = 1 // слово горизонтально имеет высоту в 1 клетку
                specification.wordHeight = wordLength // ширина в количестве клеток
                if (maxY < wordY) {
                    maxY = wordY
                }
            } else if (arrayWords[i][1] === "horizontal") {
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
        // определяем размер ячейки для буквы
        let cellBorderWidth = 1 // толщина границ обводки
        //console.log(maxX)
        let cellWidth = (externalContainerWidth - ((maxX + 1) + 1) * cellBorderWidth) / (maxX + 1)
        //wordsInfo[1].push({ cellWidth: Math.floor(cellWidth) })
        wordsInfo[1].push({ cellWidth: cellWidth })
        // let wordFontSize = Math.floor(cellWidth * 0.9)
        let wordFontSize = cellWidth * 0.6
        wordsInfo[1].push({ wordFontSize: wordFontSize })


        //console.log(wordsInfo)
        return wordsInfo
    }

    componentDidMount() { }

    render() {
        let ddd = this.toFindSizeOfXWordContainer()
        ////console.log(ddd)
        let listAllWords = ddd[0].map((word, i) => {
            return <Word key={word.wordCode} wordCode={word.wordCode} wordName={word.wordName} wordOrientation={word.wordOrientation} wordPosX={word.wordPosX} wordPosY={word.wordPosY} wordHeight={word.wordHeight} wordWidth={word.wordWidth} wordFontSize={ddd[1][1].wordFontSize} cellWidth={ddd[1][0].cellWidth} wordMode={"visible"} />
        })
        return (
            <div className="container_for_crossword">
                {listAllWords}
            </div>
        );
    };
}
export default XWord;