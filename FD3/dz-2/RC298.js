var WordsFilter = React.createClass({
    displayName: "WordsFilter",

    // getDefaultProps: function () {
    //     return {
    //         words: stringsArray,
    //     };
    // },

    propTypes: {
        words: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {
            sorted: false,
            filtered: "",
            processedWords: stringsArray,
        };
    },

    processList: function () {
        let resultWords = this.props.words;
        if (this.state.filtered) {
            resultWords = resultWords.filter((string) => string.indexOf != -1);
        } else {
            resultWords = this.props.words.slice();
        }
        if (this.state.sorted) {
            resultWords.sort();
        }
        this.setState({ processedWords: resultWords });
    },

    checkboxChange: function (EO) {
        this.setState({ sorted: !this.state.sorted }, this.processList)
    },

    filteredString: function (EO) {
        this.setState({ filtered: EO.target.value });
    },

    clear: function (EO) {
        this.setState({ sorted: false, filtered: "" });
    },
    render: function () {
        var wordCode = this.props.words.map(v =>
            React.createElement(WordString, {
                key: v.value,
                text: v.text,
            })
        );
        return React.DOM.div({ className: "ConditionsBlock" },
            React.DOM.input({ type: "checkbox", onClick: this.checkboxChange }),
            React.DOM.input({ type: "text", value: this.state.filtered, onChange: this.filteredString }),
            React.DOM.input({ type: "button", value: "сброс", onClick: this.clear }),
            React.DOM.div({ className: "WordsBlock" }, React.DOM.select({ className: 'WordsArea' }, wordCode)),
        )
    },
});
