"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';

import MainComponent from './components/MainComponent'
// import combinedReducer from '../mPlayer/redux/reducers'
// import thunk from 'redux-thunk';

//let store = createStore(combinedReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  
    <MainComponent />
 
  , document.getElementById('container'));

