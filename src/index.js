import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import store from './store';
ReactDOM.render(
    <div>
        <Provider store={store}>
        <Router>
        <App />
        </Router>
        </Provider>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
