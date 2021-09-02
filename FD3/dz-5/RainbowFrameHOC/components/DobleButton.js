import React from 'react';
import PropTypes from 'prop-types';

class DobleButton extends React.Component {

    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired,
    };
    btnClick1 = () => {
        this.props.cbPressed(1);
    }
    btnClick2 = () => {
        this.props.cbPressed(2);
    }
    render() {
        return (
            <div>
                <input type="button" value={this.props.caption1} onClick={this.btnClick1} />
                {this.props.children}
                <input type="button" value={this.props.caption2} onClick={this.btnClick2} />
            </div>
        );
    }
}

export default DobleButton;