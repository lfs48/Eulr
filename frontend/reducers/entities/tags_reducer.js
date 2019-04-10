import { merge } from 'lodash';
import { RECEIVE_ALL_TAGS } from '../../actions/entities/tag_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../../actions/entities/post_actions';

const tagsReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(RECEIVE_ALL_POSTS): {
            return action.payload.tags
        }

        case(RECEIVE_POST): {
            const tags = action.payload.tags;
            return merge(newState, tags);
        }
    }
};

export default tagsReducer;