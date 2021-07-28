var ProductInfo = React.createClass({

    displayName: 'ProductInfo',

    propTypes: {
        productName: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        selectedProductCode: React.PropTypes.number,
        isChecked: React.PropTypes.bool,
    },


    render: function () {

        return React.DOM.div({className: 'Product' },
            React.DOM.div({ className: 'ProductName' }, this.props.productName),
            React.DOM.div({ className: 'price' }, this.props.price),
            React.DOM.div({ className: 'url' }, this.props.url),
            React.DOM.div({ className: 'Count' }, this.props.count),
            React.DOM.input({ type: 'button', value: 'delete', }),
        );
    
    },
})