import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

const cb = () => {

    let preloadedState = {};
    if (window.currentUser) {
        preloadedState = {
            session: { 
                id: window.currentUser.id 
            },
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            }
        };
        window.currentUserId = window.currentUser.id;
    }
    const store = configureStore(preloadedState);
    delete window.currentUser;

    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store} />, root);
};

document.addEventListener("DOMContentLoaded", cb);