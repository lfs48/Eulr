import { connect } from 'react-redux';
import { fetchExplorePosts } from '../../../actions/entities/post_actions';
import { fetchUsers } from '../../../actions/entities/user_actions';
import Explore from './explore';

const msp = (state) => {
    const comparator = (postA, postB) => {
        if (postA.likers.length > postB.likers.length) {
            return -1;
        } else if (postA.likers.length < postB.likers.length) {
            return 1;
        } else {
            return 0;
        }
    }
    const posts = Object.values(state.entities.posts).sort(comparator).slice(0,5);
    return {
        posts: posts,
        loggedIn: Boolean(state.session.id)
    }


};    

const mdp = (dispatch) => ({
    fetchExplorePosts: () => dispatch( fetchExplorePosts() ),
    fetchUsers: () => dispatch( fetchUsers() )
});

export default connect(msp, mdp)(Explore);