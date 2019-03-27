import { merge } from 'lodash';
import { LOGIN_USER, LOGOUT_USER } from '../../actions/session/session_actions';

const sessionReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);
    
    switch(action.type) {
        default: return state;

        case(LOGIN_USER): {
            newState.id = action.user.id;
            return newState;
        }

        case(LOGOUT_USER): {
            delete newState.id;
            return newState;
        }
    }
};

export default sessionReducer;