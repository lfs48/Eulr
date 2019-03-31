import * as FollowsAPIUtil from '../../util/entities/follow_api_util';

export const RECEIVE_USER_FOLLOwS = "RECEIVE_USER_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

// Standard actions

const receiveUserFollows = (userId, follows) => ({
    type: RECEIVE_USER_FOLLOwS,
    userId: userId,
    follows: follows
});

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow: follow
});

const removeFollow = (follow) => ({
    type: REMOVE_FOLLOW,
    follow: follow
});

// Thunk actions

export const fetchFollows = (userId) => (dispatch) => {
    return FollowsAPIUtil.fetchFollows(userId).then( (follows) =>
        dispatch( receiveUserFollows(userId, follows) )
    )
};

export const createFollow = (newFollow) => (dispatch) => {
    return FollowsAPIUtil.createFollow(newFollow).then( (follow) =>
        dispatch( receiveFollow(follow) )
    )
};

export const destroyFollow = (follow) => (dispatch) => {
    return FollowsAPIUtil.destroyFollow(follow).then( (follow) =>
        dispatch( removeFollow(follow) )
    )
};