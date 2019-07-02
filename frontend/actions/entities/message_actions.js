import * as MessageAPIUtil from '../../util/entities/message_api_util';

// Standard actions

export const receiveAllMessages = (messages) => ({
    type: RECEIVE_ALL_MESSAGES,
    messages: messages
});

// Thunk actions

export const fetchMessages = (userId) => (dispatch) => {
    return MessageAPIUtil.fetchMessages(userId).then(
        (messages) => dispatch(receiveAllMessages(messages))
    );
};