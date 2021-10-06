// import first from 'ee-first';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app'
import './assets/css/personalportfolio.css'
import './assets/css/tutorial.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import Store from './store/index.js'
// import AllReducers from './reducers/index'
// import { createStore, applyMiddleware } from 'redux'
// import promiseMiddleware from 'redux-promise';
// var Store = createStore(AllReducers, applyMiddleware(promiseMiddleware));



ReactDom.render(<Provider store={Store}>
    <App />
</Provider>
    , document.getElementById('root'))