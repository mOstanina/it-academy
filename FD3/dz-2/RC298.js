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
            // console.log("11")
            // console.log(resultWords)
            resultWords = resultWords.filter((r) => r.indexOf(this.state.filtered) != -1);
        } else {
            // console.log("22")
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
        //console.log("33")
        this.setState({ filtered: EO.target.value }, this.processList);
        // console.log(EO.target.value)
    },

    clear: function (EO) {
        this.setState({ sorted: false, filtered: "", processedWords: stringsArray });
    },
    render: function () {
        // console.log(this.state.processedWords)
        var wordCode = this.state.processedWords.map(v =>
            React.createElement(WordString, {
                key: v,
                text: v,
            })
        );
        return React.DOM.div({ className: "ConditionsBlock" },
            React.DOM.input({ type: "checkbox", checked: this.state.sorted, onClick: this.checkboxChange }),
            React.DOM.input({ type: "text", value: this.state.filtered, onChange: this.filteredString }),
            React.DOM.input({ type: "button", value: "сброс", onClick: this.clear }),
            React.DOM.div({ className: "WordsBlock" }, React.DOM.ul({ className: 'WordsArea' }, wordCode)),
        )
    },
});
