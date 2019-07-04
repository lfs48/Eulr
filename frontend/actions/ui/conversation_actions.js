export const OPEN_CONVERSATION = "OPEN_CONVERSATION";
export const CLOSE_CONVERSATION = "CLOSE_CONVERSATION";

// Standard Actions

export const openConversation = (userId) => ({
    type: OPEN_CONVERSATION,
    userId: userId
});

export const closeConversation = (userId) => ({
    type: CLOSE_CONVERSATION,
    userId: userId
});