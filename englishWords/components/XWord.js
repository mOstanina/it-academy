"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';

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
        let maxX = 0
        let maxY = 0
        let coordinates = []
        let externalContainerWidth = this.state.widthOfExternalContainer
        let letterWidth = 0
        let arrayWords = this.props.listOfWordToRender
        for (let i = 0; i < arrayWords.length; i++) {
            let wordLength = arrayWords[i][3].length // длина слова
            if (arrayWords[i][1] === "vertical") {
                let wordY = arrayWords[i][2][1] + wordLength - 1 // координата "Y" последней буквы в слове
                if (maxY < wordY) {
                    maxY = wordY
                }
            } else if (arrayWords[i][1] === "horizontal") {
                let wordX = arrayWords[i][2][0] + wordLength - 1 // координата "X" последней буквы в слове
                if (maxX < wordX) {
                    maxX = wordX
                }
            }
        }
        coordinates.push(maxX)
        coordinates.push(maxY)
        console.log(coordinates)
        // определяем размер ячейки для буквы
        let cellBorderWidth = 1 // толщина границ обводки
        let cellWidth = (externalContainerWidth - ((maxX + 1) + 1) * cellBorderWidth) / (maxX + 1)

        //
        let crosswordContainer = document.createElement('div');
        crosswordContainer.className = "crosswordContainer";
        crosswordContainer.style.width = this.state.widthOfExternalContainer+ "px";
        crosswordContainer.style.height = this.state.widthOfExternalContainer + "px";
        document.body.append(crosswordContainer);
        //
        function showNote(word, positionX, positionY) {

            let note = document.createElement('div');
            note.className = "word";
            note.innerHTML = word;
            crosswordContainer.append(note);
            note.style.left = positionX * cellWidth + "px";
            note.style.top = positionY * cellWidth + "px";
        }
        let listOfWotds = arrayWords.map(function (i) {
            showNote(i[3], i[2][0], i[2][1])
        })


        return listOfWotds
    }

    componentDidMount() { }

    render() {
        let ddd = this.toFindSizeOfXWordContainer()
        return (

            <div className="container_for_crossword">
                {ddd}
            </div>

        );

    };
}
export default XWord;