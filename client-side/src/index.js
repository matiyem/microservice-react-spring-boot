import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper  from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.js.min'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>,document.getElementById('root'));
serviceWorker.unregister();
