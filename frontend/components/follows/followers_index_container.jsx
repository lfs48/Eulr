import { connect} from 'react-redux';
import FollowersIndex from './followers_index';
import { createFollow, destroyFollow, fetchFollows } from '../../actions/entities/follow_actions';
import { fetchUsers } from '../../actions/entities/user_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const followerIds = currentUser.followerIds;
    let followers = [];
    if (followerIds) {
        const users = Object.values(state.entities.users);
        followers = users.filter( (user) => followerIds.includes(user.id) );
    }
    return ({
        currentUser: currentUser,
        followers: followers
    });
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchFollows: (userId) => dispatch( fetchFollows(userId) ),
    createFollow: (follow) => dispatch( createFollow(follow) ),
    destroyFollow: (followId) => dispatch( destroyFollow(followId) )
});

export default connect(msp, mdp)(FollowersIndex);