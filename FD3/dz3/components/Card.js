import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends React.Component {
    static propTypes = {
        workMode: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        selectedProductCode: PropTypes.number,

    };
    state = {
        startWorkMode: this.props.workMode
    }

    render() {
        if (this.state.startWorkMode === 1) {
            return (
                <div className={'cssClassSelectNotEdit'}>
                    <div className='ProductName'>{this.props.productName}</div>
                    <div className='price'>{'price: ' + this.props.price}</div>
                    <div className='url'>{'url: ' + this.props.url}</div>
                    <div className='Count'>{'count: ' + this.props.count}</div>
                </div>
            )
        } else if (this.state.startWorkMode === 2) {
            return (
                <div className={'cssClassSelectEdit'}>

                    <div className={'prodInfo'}>
                        <div className='title'>{'Name'}</div>
                        <input type='text' defaultValue={this.props.productName} />
                        <span></span>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'price: '}</div>
                        <input type='text' defaultValue={this.props.price} />
                        <span></span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'url: '}</div>
                        <input type='text' defaultValue={this.props.url} />
                        <span></span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'count: '}</div>
                        <input type='text' defaultValue={this.props.count} />
                        <span></span>
                    </div>

                    <div></div>
                    <input type='button' value='edit' onClick={this.productClickedForDelete} />
                    <input type='button' value='delete' onClick={this.productClickedForDelete} />
                </div>
            )
        }
    }
}
export default Card;