import React from 'react';
import PostCreationBarItem from './post_creation_bar_item_container';

const PostCreationBar = (props) => {
    const iconLabels = [
        ["fas fa-font", "Text", "text"],
        ["fas fa-camera", "Photo", "photo"],
        ["fas fa-quote-left", "Quote", "quote"],
        ["fas fa-link", "Link", "link"],
        ["fas fa-comment-alt", "Chat", "chat"],
        ["fas fa-headphones", "Audio", "audio"],
        ["fas fa-video", "Video", "video"]
    ];
    const lis = iconLabels.map( (el, idx) => {
        return (
                <li key={idx}>
                    <PostCreationBarItem icon={el[0]} label={el[1]} postType={el[2]} />
                </li>
            );
    })
    return (
        <div className="post-creation-bar-container">
            <ul>
                {lis}
            </ul>
        </div>
    );
}

export default PostCreationBar;