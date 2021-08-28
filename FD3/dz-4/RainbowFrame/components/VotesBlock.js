import React from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

import RainbowFrame from './RainbowFrame';

class VotesBlock extends React.Component {

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    return (
      <RainbowFrame colors={colors}>
        Hello!
      </RainbowFrame>
    );
  }

}

export default VotesBlock;
