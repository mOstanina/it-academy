"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
//
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//

 import MainComponent from './components/MainComponent'
// import combinedReducer from '../mPlayer/redux/reducers'
import CoverForRedux from './components/coverForRedux'


// let store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const firebaseConfig = {
  apiKey: "AIzaSyCXtjuPH_i6kW2dQum3zfpKz_MS9wZ1Y4g",
  authDomain: "mplayeros.firebaseapp.com",
  databaseURL: "https://mplayeros-default-rtdb.firebaseio.com",
  projectId: "mplayeros",
  storageBucket: "mplayeros.appspot.com",
  messagingSenderId: "455060078701",
  appId: "1:455060078701:web:f942f6a92ceca38295bf64"
};
const app = initializeApp(firebaseConfig);
console.log(app)
const db = getFirestore(app);
console.log(db)


// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }


ReactDOM.render(
  
 
    <CoverForRedux />
  
  , document.getElementById('container'));

