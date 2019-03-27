import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { LOGIN_USER } from '../../actions/session/session_actions';

const usersReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch (action.type) {
        default: return state;

        case(LOGIN_USER):
        case(RECEIVE_USER): {
            newState[action.user.id] = action.user;
            return newState;
        }

        case(RECEIVE_ALL_USERS): {
            return action.users;
        }
    }
};

export default usersReducer;