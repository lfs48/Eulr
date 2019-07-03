import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import tagsReducer from './tags_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    tags: tagsReducer,
    messages: messagesReducer
});

export default entitiesReducer;