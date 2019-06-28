import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

let middleware;
if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(thunk, logger);
} else {
     middleware = applyMiddleware(thunk);
}

const configureStore = (preloadedState = {}) => createStore(
    rootReducer,
    preloadedState,
    middleware
);

export default configureStore;