import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


//---------------------REDUX---------------------------------

import { applyMiddleware, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import logger from 'redux-logger';

//---------------------REDUCERS---------------------------------

const feeling = ((state = '', action) => {
    return state
})

///---------------------STORE---------------------------------

const store = createStore(

    combineReducers({
        feeling
    }),
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

);
