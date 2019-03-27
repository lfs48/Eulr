import * as SessionAPIUtil from '../../util/session/session_api_util';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// Standard actions

const loginUser = (user) => ({
    type: LOGIN_USER,
    user: user
});

const logoutUser = () => ({
    type: LOGOUT_USER
});

// Thunk actions

export const login = (formUser) => (dispatch) => {
    return SessionAPIUtil.login(formUser).then(
        (user) => dispatch( loginUser(user) )
    );
};

export const logout = () => (dispatch) => {
    return SessionAPIUtil.logout().then(
        () => dispatch( logoutUser() )
    );
};