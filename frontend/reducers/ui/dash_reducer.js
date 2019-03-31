import { merge } from 'lodash';
import { OPEN_POST_FORM, CLEAR_DASH } from '../../actions/ui/dash_actions';

const dashReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {
        default: return state;

        case(OPEN_POST_FORM): {
            return true;
        }

        case(CLEAR_DASH): {
            return null;
        }
    }
}

export default dashReducer;