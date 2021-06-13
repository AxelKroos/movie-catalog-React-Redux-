import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./store/reducers/rootReducer";
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
