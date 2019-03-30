import React from'react';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const lis = this.props.posts.map( post => {
                return (<li key={post.id}>{post.content}</li>);
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