var WordString = React.createClass({
    displayName: "WordString",

    propTypes: {
        value: React.PropTypes.number,
        text: React.PropTypes.string
    },

   



    render: function () {


        return React.DOM.option(null, this.props.text);

    },
});