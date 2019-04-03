import React from 'react';
import PostIndexItem from './post_index_item/post_index_item_container';
import TextPostEditForm from '../../../posts/post_forms/text_post_edit_container';

const PostWrapper = (props) => {
    return(
        <div className="post-avatar-wrapper">
            <img className="avatar" src={props.author.avatar}></img>
            {props.edit ?
                <TextPostEditForm post={props.post} />
                :
                <PostIndexItem post={props.post} />
            }
        </div>
    );
};

export default PostWrapper;