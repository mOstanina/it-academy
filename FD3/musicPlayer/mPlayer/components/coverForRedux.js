import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainComponent from './MainComponent'
import combinedReducer from '../redux/reducers'


let store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class CoverForRedux extends React.PureComponent {
    render() {
        console.log("CoverForRedux is render");
        return (
            <Provider store={store}>
                <MainComponent />
            </Provider>
        )

    }
}
export default CoverForRedux;