"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';


//import MobileCompany from './components/MobileCompany';

// let clientsArr=[ 
//   {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
//   {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
//   {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
//   {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
// ];

// ReactDOM.render(
//   <MobileCompany 
//     name={companyName}
//     clients={clientsArr}
//   />
//   , document.getElementById('container') 
// );



ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesLinks />
      <PagesRouter />
    </div>
  </BrowserRouter>
, document.getElementById('container') );

