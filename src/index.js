import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';



//---------------------MATERIAL UI---------------------------------
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    pallete:{
        primary:{
            main:"EDE9F2"
        }
    }
})
//---------------------REDUX---------------------------------

import { applyMiddleware, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import logger from 'redux-logger';

//---------------------REDUCERS---------------------------------

const feeling = ((state = [], action) => {

    if (action.type === 'SEND_FEELING'){

        const feeling= action.payload

        const copyOfState=[...state]

        copyOfState.push(feeling)

        return copyOfState
    }
    else if (action.type === 'RESET_FEELING' || action.type=== 'RESET'){

        const copyOfState=[...state]

        copyOfState.pop()

        return copyOfState
    }
    return state;
})

const understanding = ((state = [], action) => {
    
    if (action.type === 'SEND_UNDERSTANDING'){

        const understanding= action.payload

        const copyOfState=[...state]

        copyOfState.push(understanding)

        return copyOfState
    }
    else if (action.type === 'RESET_UNDERSTANDING' || action.type=== 'RESET'){

        const copyOfState=[...state]

        copyOfState.pop()

        return copyOfState
    }
    return state;
})

const support = ((state = [], action) => {
    
    if (action.type === 'SEND_SUPPORT'){

        const support= action.payload

        const copyOfState=[...state]

        copyOfState.push(support)

        return copyOfState
    }
    else if (action.type === 'RESET_SUPPORT' || action.type=== 'RESET'){

        const copyOfState=[...state]

        copyOfState.pop()

        return copyOfState
    }
    return state;
})

const  comments= ((state = [], action) => {
    
    if (action.type === 'SEND_COMMENTS' ){

        const comments= action.payload

        const copyOfState=[...state]

        copyOfState.push(comments)

        return copyOfState
    } else if (action.type === 'RESET_COMMENTS' || action.type=== 'RESET'){

        const copyOfState=[...state]

        copyOfState.pop()

        return copyOfState
    }
    return state;
})






///---------------------STORE---------------------------------

const store = createStore(

    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
    </ThemeProvider>
);
