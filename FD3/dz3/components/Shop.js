import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';
import Products from './Products';
import Card from './Card';

class Shop extends React.Component {

    static propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                productName: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
            })
        ),
    };
    state = {
        selectedProductCodToDelete: null,
        selectedProductCod: null,
        productsArray: this.props.products,
        className: 'ProductName',
        classNameForClick: 'Product red',
        classNameWithoutClick: 'Product',
        workMode: null,
        isProductCardChanged: false,
        btnView: "btnNewProduct",
    }

    productClicked = (code) => {//колбэк клика по строке с товаром, подсвечивается строка и отображается карточка товара
        console.log('выбран ответ с кодом ' + code);
        this.setState({ selectedProductCod: code });
        if (this.state.workMode === null) {
            this.setState({
                workMode: 1,  //карточка начинает отображаться в режиме просмотра
                btnView: "btnNewProduct",//отображаю с помощью CSS-каласса  кнопку добавления нового продукта
            });
        }
        if (this.state.workMode === 2) {
            this.setState({
                workMode: 1,  //карточка начинает отображаться в режиме просмотра
                btnView: "btnNewProduct",//отображаю с помощью CSS-каласса  кнопку добавления нового продукта
            });
        }
    }

    productSelectedForDelete = (code) => {// колбэк удаления товара
        console.log('удален товар с кодом ' + code);
        if (code === this.state.selectedProductCod) {
            this.setState({
                selectedProductCod: null, //при удалении товара сбрасываю значение выбранного товара если он же и был выбран
                workMode: null,           //при удалении товара сбрасываю значение отображения крточки ведь этот товар удален
                btnView: "btnNewProduct",//если товар удален в режиме кратрочки редактирования или добавления , возвращаю кнопку добавления нового продукта
            });
        }
        this.setState({
            productsArray: this.state.productsArray.filter(product => product.code !== code)// фильтрую список товара без товара с удаляемым кодом
        });
    }
    editClicked = (code) => {// колбэк редактрования товараб при клике на "edit" карточка переходит в режим редактирования
        console.log('изменеинию подлежит товар с кодом:  ' + code);
        this.setState({
            selectedProductCod: code,  //  передаю код выбранного товара
            workMode: 2,   //карточка переходит в режим редактирования
            btnView: "btnNotView" // "скрываю" с помощью CSS-каласса кнопку добавления нового товара
        });
    }
    addNewProd = (EO) => {// функция перевода карточки в режим добавления нового  товара
        this.setState({
            workMode: 3,   //карточка переходит в режим редактирования
            selectedProductCodToDelete: null,
            selectedProductCod: null,
            btnView: "btnNotView" // "скрываю"   с помощью CSS-каласса кнопку добавления нового товара
        });
    }
    productCangeInfo = (code, returnArray) => { // колбэк добавления товара по кнопке "save"
        console.log('изменеинию подлежит товар с1 кодом:  ' + code);
        var arr = this.state.productsArray;
        var newArr = [];
        arr.forEach(function (item, i, arr) {  // формирую новый массив с товарами
            if (item.code !== code) {
                newArr.push(item)    // если код товара не совпадает просто добавляю его в новый массив
            } else {
                newArr.push(returnArray) // если код товара совпадает  добавляю новый товар в новый массив
            }
        })
        if (code > this.state.productsArray[this.state.productsArray.length-1].code) {
            newArr.push(returnArray)
        }
        console.log(this.state.productsArray)
        this.setState({
            productsArray: newArr,
            isProductCardChanged: false, // разблокирую клики по строчкам и кнопкам delete и edit
            workMode: null,
            selectedProductCod: null,
            btnView: "btnNewProduct" // "возвращаю" с помощью CSS-каласса кнопку добавления нового товара
        });
    }
    changeWorkMode = () => {   //колбэк для кнопки сброса возвращает карточку в режим просмотра и разблокирует кнопки delete 
        this.setState({
            workMode: 1,
            isProductCardChanged: false,
            btnView: "btnNewProduct" // "возвращаю"  с помощью CSS-каласса кнопку добавления нового товара  (!!!!!!!)
        });
    }

    isProductCardChangedFunc = () => {  //  колбэк блокирующий кнопки delete если в карточку были внесены изменения
        this.setState({ isProductCardChanged: true });
    }
    returnWorkMode = () => {  //  колбэк отменяющий добавление нового товара
        this.setState({
            workMode: null,
            //isProductCardChanged: false,
            btnView: "btnNewProduct" // "возвращаю" с помощью CSS-каласса кнопку добавления нового товара
        });
    }
    render() {
        var productsCode = this.state.productsArray.map(v =>
            <Products
                workMode={this.state.workMode}
                key={v.code}
                productName={v.productName}
                price={v.price}
                code={v.code}
                url={v.url}
                count={v.count}
                cbDelete={this.productSelectedForDelete}
                clickedProduct={this.state.selectedProductCod}
                cbClicked={this.productClicked}
                className={this.state.className}
                cssClassNotSelect='Product'
                cssClassSelect='Product red'
                cbClickedEdit={this.editClicked}
                isProductCardChanged={this.state.isProductCardChanged}
            />
        );
        if (this.state.workMode === null) {
            return (
                <div className='iShop'>
                    <div className='Product'>
                        <div className='ProductName'>ProductName</div>
                        <div className='price'>Price</div>
                        <div className='url'>URL</div>
                        <div className='Count'>Quality</div>
                        <div className='control'>Control</div>
                    </div>
                    <div className='Products'>{productsCode}</div>
                    <div className={this.state.btnView}>
                        <input type='button' value='new product' onClick={this.addNewProd} />
                    </div>
                </div>
            );
        } else if (this.state.workMode === 1 || this.state.workMode === 2) {
            return (
                <div>
                    <div className='iShop'>
                        <div className='Product'>
                            <div className='ProductName'>ProductName</div>
                            <div className='price'>Price</div>
                            <div className='url'>URL</div>
                            <div className='Count'>Quality</div>
                            <div className='control'>Control</div>
                        </div>
                        <div className='Products'>{productsCode}</div>
                        <div className={this.state.btnView}>
                            <input type='button' value='new product' onClick={this.addNewProd} />
                        </div> 
                    </div>
                    <Card workMode={this.state.workMode}
                        cbIsProductCardChanged={this.isProductCardChangedFunc}
                        cbChangeWorkMode={this.changeWorkMode}
                        key={this.state.selectedProductCod}
                        productName={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].productName}
                        price={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].price}
                        code={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].code}
                        url={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].url}
                        count={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].count}
                        cbChangeProductInfo={this.productCangeInfo}
                        errorMessage={"transparent"}
                    />
                </div>
            );
        } else if (this.state.workMode === 3) {
            return (
                <div>
                    <div className='iShop'>
                        <div className='Product'>
                            <div className='ProductName'>ProductName</div>
                            <div className='price'>Price</div>
                            <div className='url'>URL</div>
                            <div className='Count'>Quality</div>
                            <div className='control'>Control</div>
                        </div>
                        <div className='Products'>{productsCode}</div>
                        <div className={this.state.btnView}>
                            <input type='button' value='new product' onClick={this.addNewProd} />
                        </div>
                    </div>
                    <Card workMode={3}
                        cbIsProductCardChanged={this.isProductCardChangedFunc}
                        cbChangeWorkMode={this.changeWorkMode}
                        key={this.state.productsArray[this.state.productsArray.length-1].code + 1}
                        productName={""}
                        price={0}
                        code={this.state.productsArray[this.state.productsArray.length-1].code + 1}
                        url={""}
                        count={0}
                        cbChangeProductInfo={this.productCangeInfo}
                        cbReturnWorkMode={this.returnWorkMode}
                        errorMessage={"error"}
                    />
                </div>
            );

        }
    }
}

export default Shop;