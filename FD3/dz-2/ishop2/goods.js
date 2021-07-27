var ProductInfo = React.createClass({

    displayName: 'ProductInfo',

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
    productClicked: function (EO) {
        this.props.cbSelected(this.props.code);
    },

    render: function () {
        var productsCode = [];
        var propsProducts = this.props.arrayOfProducts;
        console.log(propsProducts)
        propsProducts.forEach(function (item, i, propsProducts) {
            var product = propsProducts[i];
            var productCode =
                React.DOM.div({ key: product.code, className: 'Product' },
                    React.DOM.div({ className: 'ProductName' }, product.productName),
                    React.DOM.div({ className: 'price' }, product.price),
                    React.DOM.div({ className: 'url' }, product.url),
                    React.DOM.div({ className: 'Count' }, product.count),
                    React.DOM.input({ type: 'button', value: 'delete', }),
                );
            productsCode.push(productCode);
        });

        return React.DOM.div({ className: 'Products' }, productsCode);
    },
})