import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import dashReducer from './dash_reducer';
import navReducer from './nav_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    dash: dashReducer,
    nav: navReducer
});

export default uiReducer;