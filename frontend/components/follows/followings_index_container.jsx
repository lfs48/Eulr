import { connect} from 'react-redux';
import FollowingsIndex from './followings_index';
import { createFollow, destroyFollow } from '../../actions/entities/follow_actions';
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
        followings: followings,
        followingIds: followingIds
    });
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch( fetchUsers() ),
    createFollow: (follow) => dispatch( createFollow(follow) ),
    destroyFollow: (follow) => dispatch( destroyFollow(follow) )
});

export default connect(msp, mdp)(FollowingsIndex);