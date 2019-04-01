import React from 'react';
import { updatePost, fetchPost } from '../../../actions/entities/post_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextPostForm from './text_post_form';

const msp = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId]
    return({
        post: post,
        content: JSON.parse(post.content),
        titlePlaceholder: ownProps.titlePlaceholder,
        bodyPlaceholder: ownProps.bodyPlaceholder,
        author: state.entities.users[post.author_id],
        handleCancel: function(event) {
            event.preventDefault();
            this.props.history.push("/dashboard");
        },
        handleSubmit: function(event) {
            event.preventDefault();
            const content = JSON.stringify(this.state.content);
            const post = merge({}, this.state.post);
            post.content = content;
            this.props.updatePost(post).then( () =>
                this.props.history.push("/dashboard")
            );
        },
        handleInput: function(type) {
            return (event) => {
                const log = this.state;
                const content = merge({}, this.state.content);
                content[type] = event.target.value;
                this.setState({
                    content: content
                });
            };
        }
    });
}

const mdp = (dispatch) => ({
    fetchPost: (id) => dispatch( fetchPost(id) ),
    updatePost: (post) => dispatch( updatePost(post) )
});

export default withRouter(connect(msp, mdp)(TextPostForm));