import { merge } from 'lodash';
import { OPEN_CONVERSATION, CLOSE_CONVERSATION, HIDE_CONVERSATION } from '../../actions/ui/conversation_actions';

const navReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(OPEN_CONVERSATION): {
            for (let key in newState) {
                newState[key] = false;
            }
            newState[action.userId] = true;
            return newState;
        }

        case(HIDE_CONVERSATION): {
            newState[action.userId] = false;
        }

        case(CLOSE_CONVERSATION): {
            delete newState[action.userId];
            return newState;
        }
    }
}

export default navReducer;