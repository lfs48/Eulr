import { connect } from "react-redux";
import { createPost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextPostForm from './text_post_form';
import LinkPostForm from './link_post_form';
import { clearDash } from "../../../actions/ui/dash_actions";

const msp = (state, ownProps) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: ownProps.postType
    },
    content: ownProps.postType === "link" ? { url: "", title: "", summary: "", description: "" } : {title: "", body: ""},
    titlePlaceholder: ownProps.titlePlaceholder,
    bodyPlaceholder: ownProps.bodyPlaceholder,
    author: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch( createPost(post) ),
    clearDash: () => dispatch( clearDash() )
});

export const TextPostCreateForm = withRouter(connect(msp, mdp)(TextPostForm));
export const LinkPostCreateForm = withRouter(connect(msp, mdp)(LinkPostForm));