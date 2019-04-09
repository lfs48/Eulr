import React from 'react';

const PostNotesIndex = (props) => {
    const lis = props.likers.map( (liker, idx) => 
        <li key={idx}>
            <img className="avatar-tiny" src={liker.avatar_url}></img>
            <span>{liker.username}</span>
        </li>
    )
    return(
        <ul>
            {lis}
        </ul>
    );
}

export default PostNotesIndex;