import * as PostsAPIUtil from '../../util/entities/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

// Standard actions

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post: post
});

const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts: posts
});

const removePost = (id) => ({
    type: REMOVE_POST,
    id: id
});

const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors: errors
});

// Thunk actions

export const fetchPost = (id) => (dispatch) => {
    return PostsAPIUtil.fetchPost(id).then(
        (post) => dispatch( receivePost(post) )
    );
};

export const fetchPosts = (authorIds = null) => (dispatch) => {
    return PostsAPIUtil.fetchPosts(authorIds).then(
        (posts) => dispatch( receiveAllPosts(posts) )
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

