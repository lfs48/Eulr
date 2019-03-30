import React from 'react';
import { updatePost, fetchPost } from "../../../../../actions/entities/post_actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextForm from './text_post_form';
import PhotoForm from './photo_post_form';
import QuoteForm from './quote_post_form';
import LinkForm from './link_post_form'
import VideoForm from './video_post_form';

const msp = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId]
    debugger
    return({
        post: post,
        content: post.content,
        handleCancel: function(event) {
            event.preventDefault();
            this.props.history.push("/dashboard");
        },
        handleSubmit: function(event) {
            event.preventDefault();
            const content = JSON.stringify(this.state.content);
            const post = merge({}, this.state.post);
            post.content = content;
            debugger
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

export const EditTextPostForm = withRouter(connect(msp, mdp)(TextForm));
export const EditPhotoPostForm = withRouter(connect(msp, mdp)(PhotoForm));
export const EditQuotePostForm = withRouter(connect(msp, mdp)(QuoteForm));
export const EditLinkPostForm = withRouter(connect(msp, mdp)(LinkForm));
export const EditVideoPostForm = withRouter(connect(msp, mdp)(VideoForm));