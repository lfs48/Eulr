export const fetchUserMessages = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${id}/messages`
    });
};

export const createMessage = (message) => {
    return $.ajax({
        method: 'POST',
        url: `api/users/${id}/messages`,
        data: { message: message }
    });
};