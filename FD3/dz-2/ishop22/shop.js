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
        this.setState({ selectedProductCodToDelete: code }, function () {
            var prodArray = this.state.productsArray

            var seaechProd = code;
            var seaechProdInd = prodArray.find(prod => prod.code === seaechProd)
          
            var r = prodArray.indexOf(seaechProdInd)
            // console.log(r)
            // console.log(prodArray)
            var prodArray2 = prodArray.filter(function (n) { return n !== prodArray[r] })
            this.setState({ productsArray: prodArray2 }, function () {
               // console.log(this.state.productsArray)
            });

        });



    },

    productClicked: function (code) {
        console.log('выбран товар с кодом ' + code);
        this.setState({ selectedProductCod: code });
        console.log(this.state.productsArray[code - 1])

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