"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';
import Crossword from './Crossword'
import { findXwordConfig } from './findXwordConfig'

let newWords = ["hi",
    "mountain",
    "Mississippi",
    "submarine",
    "elephant",
    "serious",
    "rocket",
    "scissors",
    "green",
    "train",
    "czechoslovakia",
    "human"
];

// внешний компонент только получает массив слов и прокидывает его в пропсах

class MainComponent extends React.PureComponent {

    static propTypes = {};
    state = {
        words: findXwordConfig(newWords)
    };


    render() {
        return (
            <div id="external_container">
                {/* <div className="co"></div> */}
                <Crossword words={this.state.words} />
            </div>
        );

    };
}
export default MainComponent;