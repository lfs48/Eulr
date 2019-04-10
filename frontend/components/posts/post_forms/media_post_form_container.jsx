import { connect } from "react-redux";
import { createPost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import TextPostForm from './media_post_form';
import { fetchTags } from '../../../actions/entities/tag_actions';

const msp = (state, ownProps) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: ownProps.postType
    },
    content: { caption: "" },
    media: null,
    urls: [],
    stage: 1,
    tags: [],
    author: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    formAction: (post) => dispatch(createPost(post)),
    formCancel: function () { this.props.history.push("/dashboard"); },
    fetchTags: () => dispatch(fetchTags())
});

export default withRouter(connect(msp, mdp)(TextPostForm));