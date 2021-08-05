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
    }

    productClicked = (code) => {
        console.log('выбран ответ с кодом ' + code);
        this.setState({ selectedProductCod: code });
       // console.log(this.state.productsArray);
    }

    productSelectedForDelete = (code) => {
        console.log('удален товар с кодом ' + code);
        this.setState({
            productsArray: this.state.productsArray.filter(product => product.code !== code)
        });
    }

    render() {
        var productsCode = this.state.productsArray.map(v =>
            <Products key={v.code}
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
                    <Card key={this.state.selectedProductCod}
                        // productName={this.props.products.productName}
                        productName={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].productName}
                        //price={this.props.products.price}
                        price={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].price}
                        //code={this.props.products.code}
                        code={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].code}
                        //url={this.props.products.url}
                        url={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].url}
                        //count={this.props.products.count} 
                        count={(this.state.productsArray.filter(product => product.code === this.state.selectedProductCod))[0].count}
                        />

                </div>
            );
        }

    }
}

export default Shop;