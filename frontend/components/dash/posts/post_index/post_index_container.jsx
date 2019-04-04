import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../../../actions/entities/post_actions';
import { fetchUsers } from '../../../../actions/entities/user_actions';
import { fetchTags } from '../../../../actions/entities/tag_actions';
import { fetchFollows } from '../../../../actions/entities/follow_actions';

const msp = (state) => {
    return({
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        editId: state.ui.postIndex
    });
}

const mdp = (dispatch) => ({
    fetchFollows: (id) => dispatch( fetchFollows(id) ),
    fetchPosts: (authorIds) => dispatch( fetchPosts(authorIds) ),
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchTags: () => dispatch( fetchTags() )
});

export default connect(msp, mdp)(PostIndex);