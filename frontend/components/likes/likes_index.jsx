import React from 'react'
import PostWrapper from '../dash/posts/post_index/post_wrapper_container';

class LikesIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            posts: []
        };
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then( () => this.props.fetchPosts() )
        .then( () => this.setState({ posts: this.props.posts.reverse(), loaded: true }) );
    }

    render() {
        if (this.state.loaded) {
            const lis = this.state.posts.map( post => {
                    return (
                        <li className="post-list-item" key={post.id}>
                            {this.props.editId === post.id ?
                            <>
                            <PostWrapper post={post} edit={true} />
                             <div className="modal-background"></div>
                            </>
                            :
                            <PostWrapper post={post} edit={false} />
                            }
                        </li>);
                }
            );
            return (
                <div className="likes-index-container">
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

export default LikesIndex;