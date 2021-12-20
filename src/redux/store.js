import {createStore,compose,applyMiddleware} from 'redux';
import reducers from './reducers/index'
import {composeWithDevTools} from  'redux-devtools-extension'
import thunk from 'redux-thunk'

const composeEhandser = composeWithDevTools || compose;
const store = createStore( reducers, composeEhandser(applyMiddleware(thunk)))

export default store;