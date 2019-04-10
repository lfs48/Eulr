import { connect } from 'react-redux';
import LikesIndex from './likes_index';
import { fetchUsers } from '../../actions/entities/user_actions';
import { fetchPosts } from '../../actions/entities/post_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const posts = Object.values(state.entities.posts)
        .filter( (post) =>
            currentUser.likes.includes(post.id)
         );
    return ({
        currentUser: currentUser,
        posts: posts
    });
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchPosts: () => dispatch( fetchPosts() )
});

export default connect(msp, mdp)(LikesIndex);