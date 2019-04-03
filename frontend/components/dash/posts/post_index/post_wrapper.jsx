import React from 'react';
import PostIndexItem from './post_index_item/post_index_item_container';
import {TextPostEditForm, LinkPostEditForm } from '../../../posts/post_forms/text_post_edit_container';
import MediaPostEditForm from '../../../posts/post_forms/media_post_edit_container';

const PostWrapper = (props) => {
    return(
        <div className="post-avatar-wrapper">
            <img className="avatar" src={props.author.avatar}></img>
            {props.edit ?
                (props.post.post_type === 'text' || props.post.post_type === 'quote' || props.post.post_type === 'chat') ?
                    <TextPostEditForm post={props.post} />
                    :
                        (props.post.post_type === "photo" || props.post.post_type === "audio" || props.post.post_type === "video") ?
                            <MediaPostEditForm post={props.post} />
                            :
                                <LinkPostEditForm post={props.post} />
        :
                <PostIndexItem post={props.post} />
            }
        </div>
    );
};

export default PostWrapper;