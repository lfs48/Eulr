import React from 'react';
import PostWrapper from '../posts/post_index/post_wrapper_container';

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
        debugger
        if (this.state.loaded) {
            const lis = this.state.posts.map( post => {
                return (
                    <li className="post-list-item" key={post.id}>
                        <PostWrapper post={post} edit={false} />
                    </li>);
                }
            );
            return(
                <div className="explore-container">
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

export default Explore;