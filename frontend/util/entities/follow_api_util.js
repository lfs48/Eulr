export const fetchFollows = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/follows`
    });
};

export const createFollow = (follow) => {
    return $.ajax({
        method: 'POST',
        url: `api/follows`,
        data: { follow: follow }
    });
};

export const destroyFollow = (follow) => {
    return $.ajax({
        method: "DELETE",
        url: `api/follows`,
        data: {follow: follow}
    })
}