import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../../../actions/entities/post_actions';

const msp = (state) => ({
    posts: Object.values(state.entities.posts)
});

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch( fetchPosts() )
});

export default connect(msp, mdp)(PostIndex);