import './styles.css'
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client'
import App from './App';


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>);

const count = store.getState().counter.count;
console.log(count);