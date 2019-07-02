import { merge } from 'lodash';
import { RECEIVE_ALL_MESSAGES } from '../../actions/entities/message_actions';

const messagesReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {

        default: return state;

        case(RECEIVE_ALL_MESSAGES): {
            return action.messages;
        }
    }
}