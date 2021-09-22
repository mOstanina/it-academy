"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

//let store=createStore(combinedReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <div>
      <PagesLinks />
      <PagesRouter />
    </div>
    {/*  </Provider>*/}
  </BrowserRouter>
  , document.getElementById('container'));

