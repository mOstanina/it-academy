var WordsFilter = React.createClass({
    displayName: "WordsFilter",

    propTypes: {
        checkbox: React.PropTypes.number,
        words: React.PropTypes.array.isRequired,
    },


    render: function () {
        var wordCode = this.props.words.map(v =>
            React.createElement(WordString, {
                value: v.value,
                text: v.text,
            })
        );
        console.log(wordCode)
        return React.DOM.div({ className: "ConditionsBlock" },
            React.DOM.input({ type: "checkbox" }),
            React.DOM.input({ type: "text" }),
            React.DOM.input({ type: "button", value: "сброс" }),
            React.DOM.div({ className: "WordsBlock" }, React.DOM.select({ className: 'WordsArea' },React.DOM.option(null,wordCode))),
        )
    }
});
