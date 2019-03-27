import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

const cb = () => {
    const store = configureStore();
    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store} />, root);
};

document.addEventListener("DOMContentLoaded", cb);