import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
const initState = {
    autoId: 5,
    tasks: [
        { id: 1, subject: "Milk", status: 0 },
        { id: 2, subject: "Egg", status: 0 },
        { id: 3, subject: "Carrot", status: 1 },
        { id: 4, subject: "Apple", status: 1 },
        { id: 5, subject: "Butter", status: 0 }
    ]
}
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
