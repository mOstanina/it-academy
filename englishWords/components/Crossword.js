"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';
import{findXwordConfig} from './findXwordConfig'
import XWord from './XWord'
//  listOfWordToRender - массив состоящий из:
    //      [
    //        i-0 - номер слова
    //        i-1 - горизонтальное / вертикальное расположение
    //        i-2 - координаты первой буквы (верхний левый угол)
    //        i-3 - само слово  
    //        i-4 - вид отображения слова (видимое/скрытое/отгаданное/)        
    //      ]
let listOfWordToRender = [
    [1, "vertical", [4,0], "train", "open"],
    [2, "vertical", [7,0], "elephant", "open"],
    [3, "horizontal", [0,3], "missisipi", "open"],
    [4, "vertical", [2,3], "sea", "open"],
];

//let wordConfig = findXwordConfig(this.props.words);
class Crossword extends React.PureComponent {

    static propTypes = {
        words: PropTypes.array,
    };
    state = {
        words: this.props.words
    };

    componentDidMount() {
        this.setState({
            words: findXwordConfig(this.props.words)
        });
    }

  
    render() {

        return (
            <XWord listOfWordToRender={listOfWordToRender} workMode={"open"} />
        );

    };
}
export default Crossword;