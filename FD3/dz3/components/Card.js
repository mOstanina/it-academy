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
        cbChangeWorkMode: PropTypes.func.isRequired,
        cbIsProductCardChanged: PropTypes.func.isRequired,
        cbReturnWorkMode: PropTypes.func,
        errorMessage: PropTypes.string.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {     // . стейт самой карточки
            //isCardChanged: this.props.isProductCardChanged,
            ProductName: this.props.productName,
            price: this.props.price,
            url: this.props.url,
            count: this.props.count,
            errorInputProductName: this.props.errorMessage,// для каждого поля рядом есть span с текстом ошибки
            errorInputCode: this.props.errorMessage,       // если поле не заплнено, соответствующее поле меняю с "transparent" на "error"
            errorInputPrice: this.props.errorMessage,      // это же значение я вляется названием класса данного спана
            errorInputUrl: this.props.errorMessage,
            errorInputCount: this.props.errorMessage
        };
        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.urlChange = this.urlChange.bind(this);
        this.countChange = this.countChange.bind(this);
    }
    ChangeWorkMode = (EO) => {        //   функция для кнопки сброс, возвращающая всем значениям в инпутах заначения из пропсов
        EO.stopPropagation();         //   и возвращающая классы для спанов в "transparent"
        this.props.cbChangeWorkMode(this.props.code);
        this.setState({
            ProductName: this.props.productName,
            price: this.props.price,
            url: this.props.url,
            count: this.props.count,
            errorInputProductName: "transparent",
            errorInputCode: "transparent",
            errorInputPrice: "transparent",
            errorInputUrl: "transparent",
            errorInputCount: "transparent"
        })
    }
    nameChange(EO) {
        this.setState({ ProductName: EO.target.value });
        if (EO.target.value === "" || EO.target.value === " ") {
            this.setState({ errorInputProductName: "error" })
        } else {
            this.setState({ errorInputProductName: "transparent" })
        }
        this.props.cbIsProductCardChanged()
    }
    priceChange(EO) {
        this.setState({ price: EO.target.value });
        if (EO.target.value === "" || EO.target.value === " ") {
            this.setState({ errorInputPrice: "error" })
        } else {
            this.setState({ errorInputPrice: "transparent" })
        }
    }
    urlChange(EO) {
        this.setState({ url: EO.target.value });
        if (EO.target.value === "" || EO.target.value === " ") {
            this.setState({ errorInputUrl: "error" })
        } else {
            this.setState({ errorInputUrl: "transparent" })
        }
    }
    countChange(EO) {
        this.setState({ count: EO.target.value });
        if (EO.target.value === "" || EO.target.value === " ") {
            this.setState({ errorInputCount: "error" })
        } else {
            this.setState({ errorInputCount: "transparent" })
        }
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
    returnWorkMode = (EO) => {    // кликом на "save" вношу изменения в изначальный массив с продуктами
        this.props.cbReturnWorkMode();// колбэк передающий код товара и новые свдедения об этом товаре
    }
    render() {
        if (this.props.workMode === 1) {     //режим отображения
            return (
                <div className={'cssClassSelectNotEdit'}>
                    <div className='ProductName'>{this.props.productName}</div>
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
                    <div >
                        <div>{"ID: " + this.props.code}</div>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'Name'}</div>
                        <input type='text' defaultValue={this.state.ProductName} onChange={this.nameChange} />
                        <span className={this.state.errorInputProductName}>error</span>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'price: '}</div>
                        <input type='text' defaultValue={this.state.price} onChange={this.priceChange} />
                        <span className={this.state.errorInputPrice}>error</span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'url: '}</div>
                        <input type='text' defaultValue={this.state.url} onChange={this.urlChange} />
                        <span className={this.state.errorInputUrl}>error</span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'count: '}</div>
                        <input type='text' defaultValue={this.state.count} onChange={this.countChange} />
                        <span className={this.state.errorInputCount}>error</span>
                    </div>
                    <input type='button' value='save' onClick={this.changeProductInfo} disabled={this.state.errorInputProductName != "transparent" || this.state.errorInputPrice != "transparent" || this.state.errorInputUrl != "transparent" || this.state.errorInputCount != "transparent"} />
                    <input type='button' value='cancel' onClick={this.ChangeWorkMode} />
                </div>
            )
        } else if (this.props.workMode === 3) {// режим добаления нового товара
            return (
                <div className={'cssClassSelectEdit'}>
                    <div >
                        <div className='titleOfCard'>{'Add new product'}</div>
                    </div>
                    <div >
                        <div>{"ID: " + this.props.code}</div>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'Name'}</div>
                        <input type='text' onChange={this.nameChange} />
                        <span className={this.state.errorInputProductName}>error</span>
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{'price: '}</div>
                        <input type='text' onChange={this.priceChange} />
                        <span className={this.state.errorInputPrice}>error</span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'url: '}</div>
                        <input type='text' onChange={this.urlChange} />
                        <span className={this.state.errorInputUrl}>error</span>
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{'count: '}</div>
                        <input type='text' onChange={this.countChange} />
                        <span className={this.state.errorInputCount}>error</span>
                    </div>
                    <input type='button' value='add' onClick={this.changeProductInfo} disabled={this.state.errorInputProductName != "transparent" || this.state.errorInputPrice != "transparent" || this.state.errorInputUrl != "transparent" || this.state.errorInputCount != "transparent"} />
                    <input type='button' value='cancel' onClick={this.returnWorkMode} />
                </div>
            )

        }
    }
}
export default Card;