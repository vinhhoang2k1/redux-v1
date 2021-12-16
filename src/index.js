import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render( 
    <Provider store={store}>
        <Router>
         <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);