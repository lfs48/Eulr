import { merge } from 'lodash';
import { RECEIVE_USER_FOLLOwS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/entities/follow_actions';

const followsReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(RECEIVE_USER_FOLLOwS): {
            return action.follows;
        }

        case(RECEIVE_FOLLOW): {
            newState[action.follow.id] = action.follow
            return newState;
        }

        case(REMOVE_FOLLOW): {
            delete newState[action.follow.id]
            return newState;
        }
    }
}

export default followsReducer;