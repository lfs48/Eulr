import { connect } from 'react-redux';
import PostControls from './post_controls';
import { likePost, unlikePost, deletePost } from '../../../../../actions/entities/post_actions';
import { openEditForm } from '../../../../../actions/ui/post_index_actions';

const msp = (state, ownProps) => {
    const post = ownProps.post;
    const currentUser = state.entities.users[state.session.id]
    return({
        post: post,
        currentUser: currentUser,
        isOwnPost: state.session.id === post.author_id,
        isLiked: currentUser.likes.includes(post.id)
    });
};

const mdp = (dispatch) => ({
    likePost: (like) => dispatch( likePost(like) ),
    unlikePost: (like) => dispatch( unlikePost(like) ),
    deletePost: (id) => dispatch( deletePost(id) ),
    openEditForm: (id) => dispatch( openEditForm(id) )
})

export default connect(msp, mdp)(PostControls);