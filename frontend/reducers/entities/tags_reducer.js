import { merge } from 'lodash';
import { RECEIVE_ALL_TAGS } from '../../actions/entities/tag_actions';

const tagsReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(RECEIVE_ALL_TAGS): {
            return action.tags
        }
    }
};

export default tagsReducer;