import { combineReducers } from 'redux'

import EmpReducer from './EmpReducer'
import ProductsReducer from './ProductsReducer'
import UsersReducers from './UsersReducers'

var AllReducers = combineReducers({
    EmpReducer, ProductsReducer, UsersReducers
})

export default AllReducers;