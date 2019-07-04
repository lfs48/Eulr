import { merge } from 'lodash';
import { OPEN_CONVERSATION, CLOSE_CONVERSATION } from '../../actions/ui/conversation_actions';

const navReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(OPEN_CONVERSATION): {
            newState[action.userId] = true;
            return newState;
        }

        case(CLOSE_CONVERSATION): {
            delete newState[action.userId];
            return newState;
        }
    }
}

export default navReducer;