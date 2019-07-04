import { merge } from 'lodash';
import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../actions/entities/message_actions';

const messagesReducer = (state = {}, action) => {
    let newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {

        default: return state;

        case(RECEIVE_ALL_MESSAGES): {
            newState = {};
            const currentId = action.userId
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

        case(RECEIVE_MESSAGE): {
            if (action.message.receiver_id in newState) {
                newState[action.message.receiver_id].push(action.message);
            } else if (action.message.sender_id in newState) {
                newState[action.message.sender_id].push(action.message);
            } else {
                const id = action.userId === action.message.sender_id ?  action.message.receiver_id : action.message.sender_id
                newState[id] = [action.message];
            }
            return newState;
        }
    }
}

export default messagesReducer;