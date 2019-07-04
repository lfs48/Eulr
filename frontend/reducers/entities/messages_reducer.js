import { merge } from 'lodash';
import { RECEIVE_ALL_MESSAGES } from '../../actions/entities/message_actions';

const messagesReducer = (state = {}, action) => {
    let newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {

        default: return state;

        case(RECEIVE_ALL_MESSAGES): {
            newState = {};
            const currentId = window.currentUserId;
            Object.values(action.messages).forEach(
                message => {
                    if (message.sender_id === currentId) {
                        if (message.receiver_id in newState) {
                            newState[message.receiver_id].push(message);
                        } else {
                            newState[message.receiver_id] = [message];
                        }
                    } else {
                        if (message.sender_id in newState) {
                            newState[message.sender_id].push(message);
                        } else {
                            newState[message.sender_id] = [message];
                        }
                    }
                }
            );
            return newState;
        }
    }
}

export default messagesReducer;