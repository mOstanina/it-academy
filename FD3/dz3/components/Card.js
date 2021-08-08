import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends React.Component {
    static propTypes = {
        workMode: PropTypes.number.isRequired, //передаю режим отображения крточки:  просмотр / редактирование / добавление
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        selectedProductCode: PropTypes.number,
        cbChangeProductInfo: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            ProductName: this.props.productName,
            price: this.props.price,
            url: this.props.url,
            count: this.props.count,

            errorInputProductName: "transparent",// для каждого поля рядом есть span с текстом ошибки
            errorInputCode: "transparent",       // если поле не заплнено, соответствующее поле меняю с "transparent" на "error"
            errorInputPrice: "transparent",      // это же значение я вляется названием класса данного спана
            errorInputUrl: "transparent",
            errorInputCount: "transparent"

        };
        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.urlChange = this.urlChange.bind(this);
        this.countChange = this.countChange.bind(this);
    }
    nameChange(EO) {
        this.setState({ ProductName: EO.target.value });
        if (EO.target.value === "" || EO.target.value === " ") {
            this.setState({ errorInputProductName: "error" })
        } else {
            this.setState({ errorInputProductName: "transparent" })
        }
    }
    priceChange(EO) {
        this.setState({ price: EO.target.value });
    }
    urlChange(EO) {
        this.setState({ url: EO.target.value });
    }
    countChange(EO) {
        this.setState({ count: EO.target.value });
    }
    changeProductInfo = (EO) => {    // кликом на "save" вношу изменения в изначальный массив с продуктами
        var returnArray = {
            "productName": this.state.ProductName,
            "code": this.props.code,
            "price": this.state.price,
            "url": this.state.url,
            "count": this.state.count
        }
        this.props.cbChangeProductInfo(this.props.code, returnArray);// колбэк передающий код товара и новые свдедения об этом товаре
    }

    render() {
        if (this.props.workMode === 1) {     //режим отображения
            return (
                <div className={'cssClassSelectNotEdit'}>
                    <div className='ProductName'>{this.props.ProductName}</div>
                    <div className='price'>{'price: ' + this.props.price}</div>
                    <div className='url'>{'url: ' + this.props.url}</div>
                    <div className='Count'>{'count: ' + this.props.count}</div>
                </div>
            )
        } else if (this.props.workMode === 2) {    // режим редактирования
            return (
                <div className={'cssClassSelectEdit'}>
                    <div >
                        <div className='titleOfCard'>{'Edit existing Product'}</div>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'Name'}</div>
                        <input type='text' defaultValue={this.state.ProductName} onChange={this.nameChange} />
                        <span className={this.state.errorInputProductName}>error</span>
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
                    <input type='button' value='save' onClick={this.changeProductInfo} disabled={this.state.errorInputProductName!="transparent"} />
                    <input type='button' value='cancel' onClick={this.productClickedForDelete} />
                </div>
            )
        }
    }
}
export default Card;