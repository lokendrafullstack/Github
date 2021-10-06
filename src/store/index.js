import { createStore, applyMiddleware } from 'redux'

//redux-promise_Middleware
import promiseMiddleware from 'redux-promise';

import AllReducers from './../reducers/index.js'

var Store = createStore(AllReducers, applyMiddleware(promiseMiddleware));

export default Store;
