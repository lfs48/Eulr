import * as MessageAPIUtil from '../../util/entities/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

// Standard actions

export const receiveAllMessages = (messages) => ({
    type: RECEIVE_ALL_MESSAGES,
    messages: messages
});

// Thunk actions

export const fetchMessages = (userId) => (dispatch) => {
    return MessageAPIUtil.fetchUserMessages(userId).then(
        (messages) => dispatch(receiveAllMessages(messages))
    );
};