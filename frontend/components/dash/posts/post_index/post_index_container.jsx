import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../../../actions/entities/post_actions';
import { fetchUsers } from '../../../../actions/entities/user_actions';
import { fetchTags } from '../../../../actions/entities/tag_actions';

const msp = (state) => ({
    posts: Object.values(state.entities.posts),
    editId: state.ui.postIndex
});

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch( fetchPosts() ),
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchTags: () => dispatch( fetchTags() )
});

export default connect(msp, mdp)(PostIndex);