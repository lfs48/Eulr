import { connect } from "react-redux";
import { createPost } from '../../../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import TextForm from './text_post_form';
import { merge } from 'lodash';

const msp = (state, ownProps) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: ownProps.postType
    },
    content: ownProps.content,
    handleCancel: function(event) {
        event.preventDefault();
        this.props.history.push("/dashboard");
    },
    handleSubmit: function(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const post = merge({}, this.state.post);
        post.content = content;
        this.props.createPost(post).then( () =>
            this.props.history.push("/dashboard")
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
    createPost: (post) => dispatch( createPost(post) )
});

export const TextPostForm = withRouter(connect(msp, mdp)(TextForm));