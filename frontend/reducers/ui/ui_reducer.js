import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import dashReducer from './dash_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    dash: dashReducer
});

export default uiReducer;