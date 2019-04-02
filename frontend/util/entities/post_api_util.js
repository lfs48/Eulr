export const fetchPost = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    });
};

export const fetchPosts = () => {
    return $.ajax({
        method: "GET",
        url: 'api/posts'
    });
};

export const createPost = (formData) => {
    debugger
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