import { deletePost, fetchPost } from "../../../../../actions/entities/post_actions";
import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { fetchUser } from "../../../../../actions/entities/user_actions";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    post: ownProps.post,
    author: state.entities.users[ownProps.post.author_id],
    isOwnPost: state.session.id === ownProps.post.author_id
})

const mdp = (dispatch) => ({
    fetchUser: (id) => dispatch( fetchUser(id) ),
    deletePost: (id) => dispatch( deletePost(id) )
})

export default withRouter(connect(msp, mdp)(PostIndexItem));