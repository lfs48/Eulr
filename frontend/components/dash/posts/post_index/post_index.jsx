import React from'react';
import PostIndexItem from './post_index_item/post_index_item_container';
import TextPostEditForm from '../../../posts/post_forms/text_post_edit_container';
import PostWrapper from './post_wrapper_container';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then( () => this.props.fetchPosts() )
        .then( () => this.props.fetchTags() )
        .then( () => this.setState({ loaded: true }) );
    }

    render() {
        if (this.state.loaded) {
            const lis = this.props.posts.reverse().map( post => {
                    return (
                        <li className="post-list-item" key={post.id}>
                            {this.props.editId === post.id ?
                            <>
                            <PostWrapper post={post} edit={true}/>
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

export default PostIndex;