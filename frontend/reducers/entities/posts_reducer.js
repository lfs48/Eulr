import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
    const newState = merge({}, state);
    Object.freeze(state);

    switch(action.type) {

        default: return state;
    }
};

export default postsReducer;