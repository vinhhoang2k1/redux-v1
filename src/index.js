import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './App';
import {createStore} from 'redux';
import allReducer from './reducer'
const store = createStore(allReducer);

ReactDOM.render( 
    <Provider store={store}>
        < App/ > 
    </Provider>,
    document.getElementById('root')
);