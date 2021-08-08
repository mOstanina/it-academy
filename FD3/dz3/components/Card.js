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
        cbChangeProductInfo: PropTypes.func.isRequired,
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ProductName: this.props.productName,
    //         price: this.props.price,
    //         url: this.props.url,
    //         count: this.props.count,
    //     };
    // }
    state = {
        ProductName: this.props.productName,
        price: this.props.price,
        url: this.props.url,
        count: this.props.count,
    };
    nameChange(EO) {
        console.log(EO.target.value + "!!!!!!!")
        this.setState({ ProductName: EO.target.value });
    }
    priceChange(eveEOnt) {
        this.setState({ price: EO.target.value });
    }
    urlChange(EO) {
        this.setState({ url: EO.target.value });
    }
    countChange(EO) {
        this.setState({ count: EO.target.value });
    }
    changeProductInfo = (EO) => {
        var returnArray = {
            "productName": this.state.productName,
            "code": this.props.code,
            "price": this.state.price,
            "url": this.state.url,
            "count": this.state.count
        }
        console.log(returnArray)
        this.props.cbChangeProductInfo(this.props.code, returnArray);
    }

    render() {
        if (this.props.workMode === 1) {
            return (
                <div className={'cssClassSelectNotEdit'}>
                    <div className='ProductName'>{this.props.ProductName}</div>
                    <div className='price'>{'price: ' + this.props.price}</div>
                    <div className='url'>{'url: ' + this.props.url}</div>
                    <div className='Count'>{'count: ' + this.props.count}</div>
                </div>
            )
        } else if (this.props.workMode === 2) {
            return (
                <div className={'cssClassSelectEdit'}>
                    <div >
                        <div className='titleOfCard'>{'Edit existing Product'}</div>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'Name'}</div>
                        <input type='text' defaultValue={this.state.productName} onChange={this.nameChange} />
                        <span></span>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'price: '}</div>
                        <input type='text' defaultValue={this.props.price} onChange={this.priceChange} />
                        <span></span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'url: '}</div>
                        <input type='text' defaultValue={this.props.url} onChange={this.urlChange} />
                        <span></span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'count: '}</div>
                        <input type='text' defaultValue={this.props.count} onChange={this.countChange} />
                        <span></span>
                    </div>

                    <div></div>
                    <input type='button' value='save' onClick={this.changeProductInfo} />
                    <input type='button' value='cancel' onClick={this.productClickedForDelete} />
                </div>
            )
        }
    }
}
export default Card;