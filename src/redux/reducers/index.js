import {combineReducers} from 'redux'
import {productReducer, selectedProduct} from './product'


const reducers = combineReducers({
    allProducts : productReducer,
    selectedProduct
})
export default reducers