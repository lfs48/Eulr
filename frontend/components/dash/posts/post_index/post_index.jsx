import React from'react';
import PostIndexItem from './post_index_item/post_index_item_container';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then( () => this.props.fetchPosts() )
        .then( () => this.setState({ loaded: true }) );
    }

    render() {
        if (this.state.loaded) {
            const lis = this.props.posts.reverse().map( post => {
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
        } else {
        return (<></>);
        }
    }

}

export default PostIndex;