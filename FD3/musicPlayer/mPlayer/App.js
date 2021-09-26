"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

 import MainComponent from './components/MainComponent'
// import combinedReducer from '../mPlayer/redux/reducers'
import CoverForRedux from './components/coverForRedux'

// let store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  
 
    <CoverForRedux />
  
  , document.getElementById('container'));

