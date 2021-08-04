"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop3 from './components/Ishop3';

let productsArr=require('./products.json');

ReactDOM.render(
  <Ishop3 
    productsArr={productsArr}
  />
  , document.getElementById('container') 
);