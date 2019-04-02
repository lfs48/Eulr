import { connect } from "react-redux";
import { createPost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextPostForm from './text_post_form';
import { clearDash } from "../../../actions/ui/dash_actions";

const msp = (state, ownProps) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: ownProps.postType
    },
    content: {title: "", body: ""},
    titlePlaceholder: ownProps.titlePlaceholder,
    bodyPlaceholder: ownProps.bodyPlaceholder,
    author: state.entities.users[state.session.id],
    handleCancel: function(event) {
        event.preventDefault();
        this.props.history.push("/dashboard");
    },
    handleSubmit: function(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const post = merge({}, this.state.post);
        post.content = content;
        this.props.createPost(post).then( () => {
            this.props.clearDash();
            this.props.history.push("/dashboard");
            }
        );
    },
    handleInput: function(type) {
        return (event) => {
            const content = merge({}, this.state.content);
            content[type] = event.target.value;
            this.setState({
                content: content
            });
        };
    }
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch( createPost(post) ),
    clearDash: () => dispatch( clearDash() )
});

export default withRouter(connect(msp, mdp)(TextPostForm));