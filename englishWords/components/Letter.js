"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';

import './XWord.css';

class Letter extends React.PureComponent {

    static propTypes = {
        letterName: PropTypes.string,
        letterFontSize: PropTypes.string,
        letterOnCross: PropTypes.bool,
        //firstLetter: PropTypes.bool,
        wordCode: PropTypes.number,
    };

    state = {};

    componentDidMount() {
        this.setState({
            styles: {
                fontSize: this.props.wordFontSize + 'px',
                width: this.props.cellWidth + "px",
                height: this.props.cellWidth + "px",
            }
        })
    }
    
    render() {
        return (
            <div className="letter" style={this.state.styles}>
                {this.props.letterNunber === 0 && 
                <div>
                    <div className="letter_number">
                        <div>{this.props.wordCode}</div>
                    </div>
                        <div >{this.props.letterName}</div>
                </div>}
                {this.props.letterNunber !== 0  && <div>{this.props.letterName}</div>}
            </div>
        );
    };
}
export default Letter;