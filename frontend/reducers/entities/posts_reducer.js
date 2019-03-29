import { merge } from 'lodash';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../../actions/entities/post_actions';

const postsReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {

        default: return state;

        case(RECEIVE_ALL_POSTS): {
            return action.posts;
        }

        case(RECEIVE_POST): {
            const post = action.post;
            newState[post.id] = post;
            return newState;
        }

        case(REMOVE_POST): {
            delete newState[action.id];
            return newState;
        }
    }
};

export default postsReducer;