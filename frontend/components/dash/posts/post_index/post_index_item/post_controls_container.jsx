import { connect } from 'react-redux';
import PostControls from './post_controls';
import { likePost, unlikePost, deletePost } from '../../../../../actions/entities/post_actions';
import { openEditForm } from '../../../../../actions/ui/post_index_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    const post = ownProps.post;
    const currentUser = state.entities.users[state.session.id]
    return({
        post: post,
        currentUser: currentUser,
        isOwnPost: state.session.id === post.author_id,
        isLoggedIn: currentUser ? true : false,
        isLiked: currentUser ? currentUser.likes.includes(post.id) : false
    });
};

const mdp = (dispatch) => ({
    likePost: (like) => dispatch( likePost(like) ),
    unlikePost: (like) => dispatch( unlikePost(like) ),
    deletePost: (id) => dispatch( deletePost(id) ),
    openEditForm: (id) => dispatch( openEditForm(id) )
})

export default withRouter(connect(msp, mdp)(PostControls));