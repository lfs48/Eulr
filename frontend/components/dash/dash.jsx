import React from 'react';
import PostCreationBar from './posts/post_creation/post_creation_bar_container';

class Dash extends React.Component {
    render() {
        return (
            <div>
                <PostCreationBar />
            </div>
        );
    }
}

export default Dash;