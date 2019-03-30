import React from 'react';
import PostCreationBar from './posts/post_creation/post_creation_bar_container';
import PostIndex from './posts/post_index/post_index_container';

class Dash extends React.Component {
    render() {
        return (
            <div>
                <PostCreationBar />
                <PostIndex />
            </div>
        );
    }
}

export default Dash;