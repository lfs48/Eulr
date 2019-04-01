import { merge } from 'lodash';
import { NAV_TOGGLE_LOGIN, NAV_TOGGLE_REGISTER, NAV_TOGGLE_CLEAR } from '../../actions/ui/nav_actions';

const navReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(NAV_TOGGLE_LOGIN): {
            return "register";
        }

        case(NAV_TOGGLE_REGISTER): {
            return "login"
        }

        case(NAV_TOGGLE_CLEAR): {
            return undefined;
        }
    }
}

export default navReducer;