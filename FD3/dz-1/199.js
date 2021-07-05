var iShop = React.createClass({

    displayName: 'iShop',

    getDefaultProps: function () {
        return { shopName: "Хороший zoo-магазин" }
    },

    render: function () {
        var productsCode = [];
        var propsProducts = this.props.products
        propsProducts.forEach(function (item, i, propsProducts) {
            var product = propsProducts[i];
            var productCode =
                React.DOM.div({ key: product.code, className: 'Product' },
                    React.DOM.span({ className: 'ProductName' }, product.productName),
                    React.DOM.img({ className: 'ProductImg', src: product.productImg }),
                    React.DOM.span({ className: 'Count' }, product.count),
                );
            productsCode.push(productCode);
        });

        return React.DOM.div({ className: 'iShop' },
            React.DOM.div({ className: 'ShopName' }, this.props.shop),
            React.DOM.div({ className: 'Products' }, productsCode),
        );
    },









    // render: function () {
    //     var productsCode = [];
    //     for (var a = 0; a < this.props.products.length; a++) {
    //         var product = this.props.products[a];
    //         var productCode =
    //             React.DOM.div({ key: product.code, className: 'Product' },
    //                 React.DOM.span({ className: 'Count' }, product.count),
    //                 React.DOM.span({ className: 'ProductName' }, product.productName),
    //                // React.DOM.img({ className: 'ProductImg' }, product.productImg),
    //             );
    //         productsCode.push(productCode);
    //     }
    //     return React.DOM.div({ className: 'iShop' },
    //         React.DOM.div({ className: 'ShopName' }, this.props.shop),
    //         React.DOM.div({ className: 'Products' }, productsCode),
    //     );
    // },

});