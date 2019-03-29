import { merge } from 'lodash';
import { RECEIVE_SIGNUP_ERRORS } from '../../actions/entities/user_actions';
import { RECEIVE_LOGIN_ERRORS } from '../../actions/session/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case (RECEIVE_LOGIN_ERRORS):
        case (RECEIVE_SIGNUP_ERRORS): {
            return action.errors;
        }
    }
};

export default sessionErrorsReducer;