"use strict";

import React from 'react';
import PropTypes, { func } from 'prop-types';
import Letter from './Letter';
import './XWord.css';

class Word extends React.PureComponent {

    static propTypes = {
        wordName: PropTypes.string,
        wordCode: PropTypes.number,
        wordOrientation: PropTypes.string,
        wordPosX: PropTypes.number,
        wordPosY: PropTypes.number,
        wordFontSize: PropTypes.number,
        wordMode: PropTypes.string,
        cellWidth: PropTypes.number,
        wordWidth: PropTypes.number,
        wordHeight: PropTypes.number,
    };
    //hidden
    //visible
    //guessed

    state = {};

    componentDidMount() {
        this.setState({
            styles: {
                color: 'red',
                //fontSize: this.props.wordFontSize + 'px',
                width: this.props.wordWidth * this.props.cellWidth + "px",
                height: this.props.wordHeight * this.props.cellWidth + "px",
                position: 'absolute',
                flexDirection: this.props.wordOrientation,
                top: this.props.wordPosY * this.props.cellWidth + "px",
                left: this.props.wordPosX * this.props.cellWidth + "px",
                backgroundColor: "lightsalmon",
                opacity: 0.5,
            }
        })
        // if(this.props.wordOrientation==="vertical"){
        //     this.setState({
        //         styles: {
        //             flexDirection: "column"
        //         }
        //     })
        // }
        // if(this.props.wordOrientation==="horizontal"){
        //     this.setState({
        //         styles: {
        //             flexDirection: "row"
        //         }
        //     })
        // }
    }
   
    render() {
        let ffff=this.props.wordName.toUpperCase().split("")
        //console.log(ffff)
        let listOfLetters = this.props.wordName.toUpperCase().split("").map((letter, i) => {
            return <Letter key={i} letterNunber = {i} wordCode={this.props.wordCode} letterName={letter} wordFontSize={this.props.wordFontSize} cellWidth={this.props.cellWidth} />
        })

        return (
            <div className="word" style={this.state.styles}>
                {listOfLetters}
            </div>
        );
    };
}
export default Word;