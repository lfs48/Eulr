import * as MessageAPIUtil from '../../util/entities/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

// Standard actions

export const receiveAllMessages = (messages, userId) => ({
    type: RECEIVE_ALL_MESSAGES,
    messages: messages,
    userId: userId
});

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message: message
})

// Thunk actions

export const fetchMessages = (userId) => (dispatch) => {
    return MessageAPIUtil.fetchUserMessages(userId).then(
        (messages) => dispatch(receiveAllMessages(messages, userId))
    );
};

export const createMessage = (message) => (dispatch) => {
    return MessageAPIUtil.createMessage(message).then(
        (message) => dispatch( receiveMessage(message) )
    );
}