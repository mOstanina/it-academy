import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends React.Component {
    static propTypes = {
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        selectedProductCode: PropTypes.number,

    };
    render() {
        // if (this.props.code !== this.props.clickedProduct) {
        return (
            <div className={'cssClassSelectNotEdit'}>
                <div className='ProductName'>{this.props.productName}</div>
                <div className='price'>{'price: ' + this.props.price}</div>
                <div className='url'>{'url: ' + this.props.url}</div>
                <div className='Count'>{'count: ' + this.props.count}</div>
                {/* <input type='button' value='edit' onClick={this.productClickedForDelete} />
                    <input type='button' value='delete' onClick={this.productClickedForDelete} /> */}
            </div>
        )
        //} 
    }
}
export default Card;