import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {
        let code = this.props.children
        this.props.colors.forEach(element =>
            code = <div style={{ border: "solid 3px " + element, padding: "10px" }} >{code}</div>)

        return code

    }
}

export default RainbowFrame;