import { connect } from 'react-redux';
import DashSidebar from './dash_sidebar';
import { createFollow } from '../../actions/entities/follow_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id]
    const users = Object.values(state.entities.users).filter( user => !(currentUser.followingIds.includes(user.id) || currentUser.id === user.id) );
    let randomUsers = [];
    while (randomUsers.length < Math.min(users.length, 10) ) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        if ( randomUsers.includes(randomUser) ) {
            continue;
        }
        randomUsers.push(randomUser);
    }
    return ({
        users: randomUsers,
        currentUser: currentUser
    });
};

const mdp = (dispatch) => ({
    createFollow: (follow) => dispatch( createFollow(follow) )
});

export default connect(msp, mdp)(DashSidebar);