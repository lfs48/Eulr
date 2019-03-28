import * as SessionAPIUtil from '../../util/session/session_api_util';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";

// Standard actions

const loginUser = (user) => ({
    type: LOGIN_USER,
    user: user
});

const logoutUser = () => ({
    type: LOGOUT_USER
});

const receiveLoginErrors = (errors) => ({
    type: RECEIVE_LOGIN_ERRORS,
    errors: errors
});

// Thunk actions

export const login = (formUser) => (dispatch) => {
    return SessionAPIUtil.login(formUser).then(
        (user) => dispatch( loginUser(user) ),
        (errors) => dispatch( receiveLoginErrors(errors.responseText) )
    );
};

export const logout = () => (dispatch) => {
    return SessionAPIUtil.logout().then(
        () => dispatch( logoutUser() )
    );
};