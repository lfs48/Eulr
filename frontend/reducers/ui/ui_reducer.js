import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import navReducer from './nav_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    nav: navReducer
});

export default uiReducer;