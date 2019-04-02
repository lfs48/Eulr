import { connect } from "react-redux";
import { updatePost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import MediaPostForm from './media_post_form';

const msp = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId];
    return {
        post: post,
        content: JSON.parse(post.content),
        author: state.entities.users[post.author_id],
        media: {
            file: null,
            url: post.mediaUrls[0]
        },
        stage: 2
    };
};

const mdp = (dispatch) => ({
    formAction: (post) => dispatch(updatePost(post)),
});

export default withRouter(connect(msp, mdp)(MediaPostForm));