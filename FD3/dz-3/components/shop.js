import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';
import Products from './Products';

class Ishop3 extends React.Component {

    static propTypes = {
        answers: PropTypes.arrayOf(
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
    }

    productSelectedForDelete = () => {
        console.log('удален товар с кодом ' + code);
        this.setState({ productsArray: this.state.productsArray.filter(product => product.code !== code) });
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
    }
}

export default Ishop3;