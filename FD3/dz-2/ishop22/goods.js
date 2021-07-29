var ProductInfo = React.createClass({

    displayName: 'ProductInfo',

    propTypes: {
        productName: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        selectedProductCode: React.PropTypes.number,
        cbDelete: React.PropTypes.func.isRequired,
        cbClicked: React.PropTypes.func.isRequired,
        className: React.PropTypes.string.isRequired,
        clickedProduct: React.PropTypes.number,
        cssClassNotSelect: React.PropTypes.string.isRequired,
        cssClassSelect: React.PropTypes.string.isRequired,
    },

    productClickedForDelete: function (EO) {
        EO.stopPropagation();
        this.props.cbDelete(this.props.code);
    },
    productClicked: function (EO) {
        this.props.cbClicked(this.props.code);
    },

    render: function () {
        return (this.props.code !== this.props.clickedProduct) ? React.DOM.div({ className: this.props.cssClassNotSelect, onClick: this.productClicked },
            React.DOM.div({ className: 'ProductName' }, this.props.productName),
            React.DOM.div({ className: 'price' }, this.props.price),
            React.DOM.div({ className: 'url' }, this.props.url),
            React.DOM.div({ className: 'Count' }, this.props.count),
            React.DOM.input({ type: 'button', value: 'delete', onClick: this.productClickedForDelete }),
        ) : React.DOM.div({ className: this.props.cssClassSelect, onClick: this.productClicked },
            React.DOM.div({ className: 'ProductName' }, this.props.productName),
            React.DOM.div({ className: 'price' }, this.props.price),
            React.DOM.div({ className: 'url' }, this.props.url),
            React.DOM.div({ className: 'Count' }, this.props.count),
            React.DOM.input({ type: 'button', value: 'delete', onClick: this.productClickedForDelete }),
        );

    },
})