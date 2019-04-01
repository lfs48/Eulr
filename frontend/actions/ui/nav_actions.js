export const NAV_TOGGLE_LOGIN = "NAV_TOGGLE_LOGIN";
export const NAV_TOGGLE_REGISTER = "NAV_TOGGLE_REGISTER"
export const NAV_TOGGLE_CLEAR = "NAV_TOGGLE_CLEAR";

export const navToggleLogin = () => ({
    type: NAV_TOGGLE_LOGIN
});

export const navToggleRegister = () => ({
    type: NAV_TOGGLE_REGISTER
});

export const navToggleClear = () => ({
    type: NAV_TOGGLE_LOGIN
});
