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
        //isClicked: React.PropTypes.bool,
        className: React.PropTypes.string.isRequired,
       // cssClass:React.PropTypes.string.isRequired,
    },

    getInitialState: function () {
        return {
            isClicked: false,
            className: this.props.className,
            cssClass:'Product',
        };
    },

    productClickedForDelete: function (EO) {
        this.props.cbDelete(this.props.code);
    },
    productClicked: function (EO) {
        this.props.cbClicked(this.props.code);
        this.setState({cssClass:'Product red'})
        //this.state.isClicked = true;
    },

    render: function () {
        // if (this.state.isClicked === false) {
            return React.DOM.div({ className: this.state.cssClass, onClick: this.productClicked },
                React.DOM.div({ className: 'ProductName' }, this.props.productName),
                React.DOM.div({ className: 'price' }, this.props.price),
                React.DOM.div({ className: 'url' }, this.props.url),
                React.DOM.div({ className: 'Count' }, this.props.count),
                React.DOM.input({ type: 'button', value: 'delete', onClick: this.productClickedForDelete }),
            );
        // }else{
        //     return React.DOM.div({ className: 'Product red', onClick: this.productClicked },
        //     React.DOM.div({ className: 'ProductName' }, this.props.productName),
        //     React.DOM.div({ className: 'price' }, this.props.price),
        //     React.DOM.div({ className: 'url' }, this.props.url),
        //     React.DOM.div({ className: 'Count' }, this.props.count),
        //     React.DOM.input({ type: 'button', value: 'delete', onClick: this.productClickedForDelete }),
        // );
        // }
    },
})