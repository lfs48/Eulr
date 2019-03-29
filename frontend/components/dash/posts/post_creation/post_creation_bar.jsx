import React from 'react';

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
                    <i className={el[0]}></i>
                    <span>{el[1]}</span>
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