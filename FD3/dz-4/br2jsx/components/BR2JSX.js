import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        let wordsArray = this.props.text.split(/<br *\/?>/g)
       // console.log(wordsArray);
        let newString = [];
        wordsArray.forEach((element, i) => {
            if (i) {
                newString.push(<br key={i}/>);
            }
            newString.push(element);
        });
        return <div className="br2jsx"> {newString}</div>
    }
}

export default BR2JSX;