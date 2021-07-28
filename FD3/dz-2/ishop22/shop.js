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
            selectedProductCode: null,
            productsArray: this.props.products,
        };
    },

    answerSelected: function (code) {
        console.log('выбран ответ с кодом ' + code);
        this.setState({ selectedProductCode: code });
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
            React.DOM.div({ className: 'Products' }, productsCode ),
        );
    },

});