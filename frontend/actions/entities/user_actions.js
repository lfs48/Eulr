import * as UsersAPIUtil from '../../util/entities/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";

// Standard actions

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users: users
});

const receiveSignupErrors = (errors) => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors: errors
});

// Thunk actions

export const fetchUser = (id) => (dispatch) => {
    return UsersAPIUtil.fetchUser(id).then(
        (user) => dispatch( receiveUser(user) )
    );
};

export const fetchUsers = () => (dispatch) => {
    return UsersAPIUtil.fetchUsers().then(
        (users) => dispatch(receiveAllUsers(users))
    );
};

export const createUser = (formUser) => (dispatch) => {
    return UsersAPIUtil.createUser(formUser).then(
        (user) => dispatch(receiveUser(user)),
        (errors) => dispatch(receiveSignupErrors(errors.responseJSON))
    );
};