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
    }

    productClicked = (code) => {
        console.log('выбран ответ с кодом ' + code);
        this.setState({ selectedProductCod: code });
        if (this.state.workMode === null) {
            this.setState({ workMode: 1 });
        }
        if (this.state.workMode === 2) {
            this.setState({ workMode: 1 });
        }
        console.log(this.state.workMode);
    }

    productSelectedForDelete = (code) => {
        console.log('удален товар с кодом ' + code);
        if (code === this.state.selectedProductCod) {
            this.setState({ selectedProductCod: null });
            this.setState({ workMode: null });
        }
        this.setState({
            productsArray: this.state.productsArray.filter(product => product.code !== code)
        });
    }
    editClicked = (code) => {
        console.log(this.state.workMode);
        console.log('изменеинию подлежит товар с кодом:  ' + code);
        this.setState({ selectedProductCod: code });
        this.setState({ workMode: 2 });
        console.log(this.state.workMode);
    }
    productCangeInfo = (code, returnArray) => {
        console.log('изменеинию подлежит товар с1 кодом:  ' + code);
        console.log(this.state.productsArray);
        var arr = this.state.productsArray;
        var newArr=[];
        arr.forEach(function (item, i, arr) {
            if (item.code !== code) {
                newArr.push(item)
            }else{
                newArr.push(returnArray)
            }
        })
        this.setState({
            productsArray: newArr
        });
    }

    render() {
        var productsCode = this.state.productsArray.map(v =>
            <Products
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
            />
        );
        if (this.state.selectedProductCod === null) {
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
                </div>
            );
        } else {
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
                    </div>
                    <Card workMode={this.state.workMode}
                        key={this.state.selectedProductCod}
                        productName={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].productName}
                        price={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].price}
                        code={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].code}
                        url={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].url}
                        count={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].count}
                        cbChangeProductInfo={this.productCangeInfo}
                    />
                </div>
            );
        }
    }
}

export default Shop;