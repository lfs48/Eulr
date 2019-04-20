import React from 'react';
import PostWrapper from '../posts/post_index/post_wrapper_container';
import PostIndexItem from '../posts/post_index/post_index_item/post_index_item_container';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then( () => this.props.fetchExplorePosts() )
        .then( () => 
            this.setState({
                loaded: true,
                posts: this.props.posts.reverse()
            })
        );
    }

    render() {
        if (this.state.loaded) {
            const lis = this.state.posts.map( post => {
                return (
                    <li className="post-list-item" key={post.id}>
                        <PostIndexItem post={post} />
                    </li>);
                }
            );

            return(
                <div className="explore-container">
                    <ul id="explore-list">
                        {lis}
                    </ul>
                </div>
            );
        } else {
            return (<div className="explore-container"><ul id="explore-list"></ul></div>);
        }
        
    }
}

export default Explore;