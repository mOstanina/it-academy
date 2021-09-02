import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

import DobleButton from './DobleButton';
import { withRainbowFrame } from './withRainbowFrame';


class VotesBlock extends React.Component {

  presseed = (v) => {
    console.log(v)
  }

  render() {
    let colors = ['red'];
    let captionA = "hello!";
    let captionB = "hi!";
    let FramedDoubleButton = withRainbowFrame(colors)(DobleButton);
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
