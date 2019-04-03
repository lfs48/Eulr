import { connect } from "react-redux";
import { createPost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import TextPostForm from './text_post_form';
import LinkPostForm from './link_post_form';

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
    formAction: (post) => dispatch( createPost(post) ),
    formCancel: function() { this.props.history.push("/dashboard"); }
});

export const TextPostCreateForm = withRouter(connect(msp, mdp)(TextPostForm));
export const LinkPostCreateForm = withRouter(connect(msp, mdp)(LinkPostForm));