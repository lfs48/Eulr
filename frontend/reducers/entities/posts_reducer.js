import { merge } from 'lodash';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, REMOVE_LIKE } from '../../actions/entities/post_actions';

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

        case(REMOVE_LIKE): {
            const post = newState[action.like.post_id];
            if (post && post.likers) {
                const idx = post.likers.indexOf(action.like.user_id);
                post.likers = post.likers.slice(0, idx).concat( post.likers.slice(idx + 1, post.likers.length) );
            }
            return newState;
        }
    }
};

export default postsReducer;