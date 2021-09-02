import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

import DobleButton from './DobleButton';
import { withRainbowFrame } from './withRainbowFrame';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let captionA = "hello!";
let captionB = "hi!";
let FramedDoubleButton = withRainbowFrame(colors)(DobleButton);
class VotesBlock extends React.Component {

  presseed = (v) => {
    console.log(v)
  }

  render() {

    return (
      <div>
        <DobleButton caption1={captionA}
          caption2={captionB}
          cbPressed={this.presseed}>
          bonjour!
        </DobleButton>
        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={this.presseed}>вышел, был сильный</FramedDoubleButton>
      </div>

    );
  }

}

export default VotesBlock;
