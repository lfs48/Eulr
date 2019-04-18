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
        this.props.fetchExplorePosts()
        .then( () =>
            this.setState({
                loaded: true
            })
        );
    }

    render() {
        const lis = this.props.posts.reverse().map( post => {
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
        if (this.state.loaded) {
            return(
                <ul>
                    {lis}
                </ul>
            );
        } else {
            return (<></>);
        }
        
    }
}

export default Explore;