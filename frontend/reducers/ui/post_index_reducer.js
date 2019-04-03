import { merge } from 'lodash';
import { OPEN_EDIT_FORM, CLOSE_EDIT_FORM } from '../../actions/ui/post_index_actions';

const postIndexReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(OPEN_EDIT_FORM): {
            return action.postId;
        }

        case(CLOSE_EDIT_FORM): {
            return null;
        }
    }
};

export default postIndexReducer;