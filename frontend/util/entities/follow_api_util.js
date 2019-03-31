export const fetchFollows = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${id}/follows`
    });
};

export const createFollow = (follow) => {
    return $.ajax({
        method: 'POST',
        url: `api/follows`,
        data: { follow: follow }
    });
};

export const destroyFollow = (followId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/follows/${followId}`
    })
}