import React from 'react';
import { updatePost, fetchPost } from '../../../actions/entities/post_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import TextPostForm from './text_post_form';
import LinkPostForm from './link_post_form';
import { closeEditForm } from '../../../actions/ui/post_index_actions';
import { fetchTags } from '../../../actions/entities/tag_actions';

const msp = (state, ownProps) => {
    const post = ownProps.post;
    const tags = Object.values(state.entities.tags).filter( (tag) =>
            post.tags.includes(tag.id)
        ).map( (tag) =>
            tag.tag
        );
    return({
        post: post,
        tags: tags,
        content: JSON.parse(post.content),
        titlePlaceholder: ownProps.titlePlaceholder,
        bodyPlaceholder: ownProps.bodyPlaceholder,
        author: state.entities.users[post.author_id],
    });
};

const mdp = (dispatch) => ({
    fetchPost: (id) => dispatch( fetchPost(id) ),
    formAction: (post) => dispatch( updatePost(post) ),
    formCancel: () => dispatch( closeEditForm() ),
    fetchTags: () => dispatch(fetchTags())
});

export const TextPostEditForm = withRouter(connect(msp, mdp)(TextPostForm));
export const LinkPostEditForm = withRouter(connect(msp, mdp)(LinkPostForm));