"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let productsArr = require('./products.json');

ReactDOM.render(
  <Shop
    products = {productsArr}
  />
  , document.getElementById('container')
);