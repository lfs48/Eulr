import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../../../actions/entities/post_actions';
import { fetchUsers } from '../../../../actions/entities/user_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const authors = currentUser.followingIds ? currentUser.followingIds.concat(currentUser.id) : [currentUser.id]
    return({
        posts: Object.values(state.entities.posts),
        currentUser: currentUser,
        authors: authors,
        editId: state.ui.postIndex
    });
}

const mdp = (dispatch) => ({
    fetchPosts: (authorIds) => dispatch( fetchPosts(authorIds) ),
});

export default connect(msp, mdp)(PostIndex);