import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import navReducer from './nav_reducer';
import postIndexReducer from './post_index_reducer';
import conversationsReducer from './conversation_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    nav: navReducer,
    postIndex: postIndexReducer,
    conversations: conversationsReducer
});

export default uiReducer;