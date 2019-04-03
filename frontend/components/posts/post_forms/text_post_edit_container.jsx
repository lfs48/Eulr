import React from 'react';
import { updatePost, fetchPost } from '../../../actions/entities/post_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextPostForm from './text_post_form';

const msp = (state, ownProps) => {
    const post = ownProps.post;
    return({
        post: post,
        content: JSON.parse(post.content),
        titlePlaceholder: ownProps.titlePlaceholder,
        bodyPlaceholder: ownProps.bodyPlaceholder,
        author: state.entities.users[post.author_id],
    });
};

const mdp = (dispatch) => ({
    fetchPost: (id) => dispatch( fetchPost(id) ),
    formAction: (post) => dispatch( updatePost(post) )
});

export default withRouter(connect(msp, mdp)(TextPostForm));