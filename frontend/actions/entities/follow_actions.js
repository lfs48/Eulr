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

const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId: followId
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

export const destroyFollow = (followId) => (dispatch) => {
    return FollowsAPIUtil.destroyFollow(followId).then( () =>
        dispatch( removeFollow(followId) )
    )
};