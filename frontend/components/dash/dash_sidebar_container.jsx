import { connect } from 'react-redux';
import DashSidebar from './dash_sidebar';
import { fetchUsers } from '../../actions/entities/user_actions';

const msp = (state, ownProps) => {
    const currentUser = ownProps.currentUser;
    const users = Object.values(state.entities.users);
    let randomUsers = [];
    while (randomUsers.length < 2) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        if ( randomUsers.includes(randomUser) || randomUser.id === currentUser.id) {
            continue;
        }
        randomUsers.push(randomUser);
    }
    return ({
        users: randomUsers,
    });
};

const mdp = (dispatch) => ({
    fetchUsers: dispatch( fetchUsers() )
});

export default connect(msp, mdp)(DashSidebar);