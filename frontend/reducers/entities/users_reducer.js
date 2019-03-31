import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { LOGIN_USER } from '../../actions/session/session_actions';
import { RECEIVE_USER_FOLLOwS, RECEIVE_FOLLOW } from '../../actions/entities/follow_actions';

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

        case(RECEIVE_USER_FOLLOwS): {
            const user = newState[action.userId]
            if (user) {
                const follows = Object.values(action.follows);
                const followerIds = follows
                    .filter( (follow) => follow.followee_id === user.id )
                    .map( (follow) => follow.follower_id )
                const followingIds = follows
                .filter( (follow) => follow.follower_id === user.id )
                .map( (follow) => follow.followee_id )
                user.followerIds = followerIds;
                user.followingIds = followingIds;
            }
            return newState;
        }

        case(RECEIVE_FOLLOW): {
            const follower = newState[action.follow.follower_id];
            if (follower) { 
                if (follower.followingIds) {
                    follower.followingIds.push(action.follow.followee_id);
                } else {
                    follower.followingIds = [action.follow.followee_id];
                }
             }
            const followee = newState[action.follow.followee_id];
            if (followee) {
                if (followee.followingIds) {
                    followee.followerIds.push(action.follow.follower_id);
                } else {
                    followee.followerIds = [action.follow.follower_id];
                }
            }
            return newState;
        }
    }
};

export default usersReducer;