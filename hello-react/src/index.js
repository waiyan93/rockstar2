import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = ['Milk', 'Egg', 'Carrot'];
const store = createStore((state = initState, action) => {
    if (action.type === "add") {
        state = [...state, action.value];
    }
    if (action.type === "remove") {
        state = state.filter(item => item !== action.value);
    }
    return state;
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
