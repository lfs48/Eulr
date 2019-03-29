import { connect } from "react-redux";
import PostForm from './post_form';
import { createPost } from "../../../../actions/entities/post_actions";

const msp = (state, ownProps) => ({
    post: {
        content: "",
        postType: ownProps.postType
    }
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch( createPost(post) )
});

export default connect(msp, mdp)(PostForm);