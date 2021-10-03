import React from 'react';
import PropTypes from 'prop-types';

import './Loader.css';

class Loader extends React.PureComponent {
    render() {
        return (
            <div className="container_Loader">
                <div><img src="../pictures/vinyl-logo.png" /></div>
            </div>
        )
    }
}
export default Loader;