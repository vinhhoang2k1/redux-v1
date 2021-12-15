import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore} from 'redux'
import contactReducer from './redux/reducers/contactReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';



const store = createStore(contactReducer,composeWithDevTools())
ReactDOM.render( 
    <Provider store={store}>
        <Router>
         <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);