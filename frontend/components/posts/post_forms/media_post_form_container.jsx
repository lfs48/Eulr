import { connect } from "react-redux";
import { createPost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextPostForm from './media_post_form';
import { clearDash } from "../../../actions/ui/dash_actions";

const msp = (state, ownProps) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: ownProps.postType
    },
    content: { caption: "" },
    media: null,
    author: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post)),
});

export default withRouter(connect(msp, mdp)(TextPostForm));