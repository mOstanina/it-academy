var iShop2 = React.createClass({
    displayName: 'iShop2',

    propTypes: {
        productsArr: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                productName: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                count: React.PropTypes.number.isRequired,
            })
        ),
    },
    getInitialState: function () {
        return {
            selectedProductCodToDelete: null,
            selectedProductCod: null,
            productsArray: this.props.products,
            className: 'ProductName',
            classNameForClick: 'Product red',
            classNameWithoutClick: 'Product',
        };
    },

    productSelectedForDelete: function (code) {
        console.log('удален товар с кодом ' + code);
        this.setState({ selectedProductCodToDelete: code });
        delete this.state.productsArray[code - 1];
    },

    productClicked: function (code) {
       // if (selectedProductCod === code) {
            console.log('выбран товар с кодом ' + code);
            this.setState({ selectedProductCod: code });
            console.log(this.state.productsArray[code - 1])

        // } else {
        //     e.stopPropagation()
        // }

    },

    render: function () {
        var productsCode = this.state.productsArray.map(v =>
            React.createElement(ProductInfo, {
                key: v.code,
                productName: v.productName,
                price: v.price,
                code: v.code,
                url: v.url,
                count: v.count,
                cbDelete: this.productSelectedForDelete,
                clickedProduct: this.state.selectedProductCod,
                cbClicked: this.productClicked,
                className: this.state.className,
                cssClassNotSelect: 'Product',
                cssClassSelect: 'Product red',
            })
        );

        return React.DOM.div({ className: 'iShop' },
            React.DOM.div({ className: 'Product' },
                React.DOM.div({ className: 'ProductName' }, 'ProductName'),
                React.DOM.div({ className: 'price' }, 'Price'),
                React.DOM.div({ className: 'url' }, 'URL'),
                React.DOM.div({ className: 'Count' }, 'Quality'),
                React.DOM.div({ className: 'control' }, 'Control'),
            ),
            React.DOM.div({ className: 'Products' }, productsCode),
        );
    },
});