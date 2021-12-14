import counterReducer from './counter';
import loggerReducer from './isLogger';
import {combineReducers} from 'redux'

//combineReducer no nhan object lam doi so : tong hop lai tat ca cac reducer

// const allReducer = combineReducers({
//     count : counterReducer,
//     isLogger : loggerReducer
// })

const allReducer = combineReducers({
    counter: counterReducer
})

export default allReducer;