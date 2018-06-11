import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import './modules/rem'
import './assets/iconfont/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store from './store'

import {
    BrowserRouter as Router
} from 'react-router-dom'

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
