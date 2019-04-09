import React from 'react';

class PostNotesIndex {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
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
}

export default PostNotesIndex;