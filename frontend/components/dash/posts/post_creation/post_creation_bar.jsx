import React from 'react';
import PostCreationBarItem from './post_creation_bar_item_container';

const PostCreationBar = (props) => {
    const iconLabels = [
        ["fas fa-font", "Text"],
        ["fas fa-camera", "Photo"],
        ["fas fa-quote-left", "Quote"],
        ["fas fa-link", "Link"],
        ["fas fa-comment-alt", "Chat"],
        ["fas fa-headphones", "Audio"],
        ["fas fa-video", "Video"]
    ];
    const lis = iconLabels.map( (el, idx) => {
        return (
                <li key={idx}>
                    <PostCreationBarItem icon={el[0]} label={el[1]} />
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