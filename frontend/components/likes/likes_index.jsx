import React from 'react'
import PostWrapper from '../dash/posts/post_index/post_wrapper_container';

class LikesIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            posts: props.posts
        };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    render() {
        if (this.state.loaded) {
            const lis = this.state.posts.reverse().map( post => {
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

export default LikesIndex;