import React from'react';
import PostIndexItem from './post_index_item/post_index_item_container';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
    }

    render() {
        const lis = this.props.posts.map( post => {
                return (<li key={post.id}><PostIndexItem post={post}/></li>);
            }
        );
        return (
            <div>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }

}

export default PostIndex;