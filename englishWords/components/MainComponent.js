"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';
import Crossword from './Crossword'

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
    "Czechoslovakia",
    "human",
    "0", "0", "0", "0", "0", "0"
];

// внешний компонент только получает массив слов и прокидывает его в пропсах

class MainComponent extends React.PureComponent {

    static propTypes = {};
    state = {
        words: newWords
    };

    render() {

        return (
            <div id="external_container">
                <Crossword words={this.state.words} />
            </div>
        );

    };
}
export default MainComponent;