export const fetchPost = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    });
};

export const fetchPosts = (authorIds = null) => {
    return $.ajax({
        method: "GET",
        url: 'api/posts',
        data: {authorIds: authorIds}
    });
};

export const fetchExplorePosts = () => {
    return $.ajax({
        method: "GET",
        url: 'api/explore'
    })
}

export const createPost = (formData) => {
    return $.ajax({
        method: "POST",
        url: 'api/posts',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updatePost = (formData) => {
    return $.ajax({
        method: "PATCH",
        url: `api/posts/${formData.get("post[id]")}`,
        data: formData,
        contentType: false,
        processData: false
    });
};

export const deletePost = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${id}`
    });
};

export const likePost = (like) => {
    return $.ajax({
        method: 'POST',
        url: 'api/likes/',
        data: { like: like }
    })
};

export const unlikePost = (like) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/likes/',
        data: { like: like }
    })
}