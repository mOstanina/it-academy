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
            selectedProduct: null,
            productsArray: this.props.products,
        };
    },

    render: function () {

        return React.DOM.div({ className: 'iShop' },
            React.DOM.div({ className: 'Product' },
                React.DOM.div({ className: 'ProductName' }, 'ProductName'),
                React.DOM.div({ className: 'price' }, 'Price'),
                React.DOM.div({ className: 'url' }, 'URL'),
                React.DOM.div({ className: 'Count' }, 'Quality'),
                React.DOM.div({ className: 'control' }, 'Control'),
            ),
            React.createElement(ProductInfo, { arrayOfProducts: this.state.productsArray }),
        );
    },

});