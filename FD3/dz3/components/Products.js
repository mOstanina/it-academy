import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
    static propTypes = {
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        selectedProductCode: PropTypes.number,
        cbDelete: PropTypes.func.isRequired,
        cbClicked: PropTypes.func.isRequired,
        className: PropTypes.string.isRequired,
        clickedProduct: PropTypes.number,
        cssClassNotSelect: PropTypes.string.isRequired,
        cssClassSelect: PropTypes.string.isRequired,
        cbClickedEdit: PropTypes.func.isRequired,// колбэк для изменения продукта
    };
    productClickedForDelete = (EO) => {
        EO.stopPropagation();
        this.props.cbDelete(this.props.code);
    }
    productClicked = (EO) => {
        this.props.cbClicked(this.props.code);
    }
    editClicked = (EO) => {
        EO.stopPropagation();
        this.props.cbClickedEdit(this.props.code);
    }
    render() {
        if (this.props.code !== this.props.clickedProduct) {
            return (
                <div className={this.props.cssClassNotSelect} onClick={this.productClicked}>
                    <div className='ProductName'>{this.props.productName}</div>
                    <div className='price'>{this.props.price}</div>
                    <div className='url'>{this.props.url}</div>
                    <div className='Count'>{this.props.count}</div>
                    <input type='button' value='edit' onClick={this.editClicked} />
                    <input type='button' value='delete' onClick={this.productClickedForDelete} />
                </div>
            )
        } else {
            return (
                <div className={this.props.cssClassSelect} onClick={this.productClicked}>
                    <div className='ProductName'>{this.props.productName}</div>
                    <div className='price'>{this.props.price}</div>
                    <div className='url'>{this.props.url}</div>
                    <div className='Count'>{this.props.count}</div>
                    <input type='button' value='edit' onClick={this.editClicked} />
                    <input type='button' value='delete' onClick={this.productClickedForDelete} />
                </div>
            );
        }
    }
}

export default Products;