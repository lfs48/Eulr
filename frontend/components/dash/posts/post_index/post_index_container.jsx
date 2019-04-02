import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../../../actions/entities/post_actions';
import { fetchUsers } from '../../../../actions/entities/user_actions';

const msp = (state) => ({
    posts: Object.values(state.entities.posts)
});

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch( fetchPosts() ),
    fetchUsers: () => dispatch( fetchUsers() )
});

export default connect(msp, mdp)(PostIndex);