import * as PostsAPIUtil from '../../util/entities/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_LIKE = "REMOVE_LIKE";

// Standard actions

const receivePost = (payload) => ({
    type: RECEIVE_POST,
    payload: payload
});

const receiveAllPosts = (payload) => ({
    type: RECEIVE_ALL_POSTS,
    payload: payload
});

const removePost = (id) => ({
    type: REMOVE_POST,
    id: id
});

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like: like
});

const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors: errors
});

// Thunk actions

export const fetchPost = (id) => (dispatch) => {
    return PostsAPIUtil.fetchPost(id).then(
        (payload) => dispatch( receivePost(payload) )
    );
};

export const fetchPosts = (authorIds = null) => (dispatch) => {
    return PostsAPIUtil.fetchPosts(authorIds).then(
        (payload) => dispatch( receiveAllPosts(payload) )
    );
};

export const fetchExplorePosts = () => (dispatch) => {
    return PostsAPIUtil.fetchExplorePosts().then(
        (payload) => dispatch( receiveAllPosts(payload) )
    );
};

export const createPost = (formPost) => (dispatch) => {
    return PostsAPIUtil.createPost(formPost).then(
        (post) => dispatch( receivePost(post) ),
        (errors) => dispatch( receivePostErrors(errors.responseJSON) )
    );
};

export const updatePost = (formPost) => (dispatch) => {
    return PostsAPIUtil.updatePost(formPost).then(
        (post) => dispatch(receivePost(post)),
        (errors) => dispatch(receivePostErrors(errors.responseJSON))
    );
};

export const deletePost = (id) => (dispatch) => {
    return PostsAPIUtil.deletePost(id).then(
        () => dispatch(removePost(id))
    );
};

export const likePost = (like) => (dispatch) => {
    return PostsAPIUtil.likePost(like).then(
        (post) => dispatch(receivePost(post))
    )
}

export const unlikePost = (like) => (dispatch) => {
    return PostsAPIUtil.unlikePost(like).then(
        (like) => dispatch(removeLike(like))
    )
}
