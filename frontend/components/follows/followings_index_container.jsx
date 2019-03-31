import { connect} from 'react-redux';
import FollowingsIndex from './followings_index';
import { createFollow, destroyFollow, fetchFollows } from '../../actions/entities/follow_actions';
import { fetchUsers } from '../../actions/entities/user_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const followingIds = currentUser.followingIds;
    let followings = [];
    if (followingIds) {
        const users = Object.values(state.entities.users);
        followings = users.filter( (user) => followingIds.includes(user.id) );
    }
    return ({
        currentUser: currentUser,
        followings: followings
    });
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchFollows: (userId) => dispatch( fetchFollows(userId) ),
    createFollow: (follow) => dispatch( createFollow(follow) ),
    destroyFollow: (followId) => dispatch( destroyFollow(followId) )
});

export default connect(msp, mdp)(FollowingsIndex);