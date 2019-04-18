import { connect } from 'react-redux';
import DashSidebar from './dash_sidebar';
import { createFollow } from '../../actions/entities/follow_actions';

const msp = (state, ownProps) => {
    const currentUser = ownProps.currentUser;
    const users = Object.values(state.entities.users);
    let randomUsers = [];
    while (randomUsers.length < 5) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        if ( randomUsers.includes(randomUser) || randomUser.id === currentUser.id || currentUser.followingIds.includes(randomUser.id)) {
            continue;
        }
        randomUsers.push(randomUser);
    }
    return ({
        users: randomUsers,
    });
};

const mdp = (dispatch) => ({
    createFollow: (follow) => dispatch( createFollow(follow) )
});

export default connect(msp, mdp)(DashSidebar);