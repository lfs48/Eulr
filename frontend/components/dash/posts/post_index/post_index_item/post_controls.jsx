import React from 'react';

class PostControls extends React.Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);

        this.state = {
            open: false,
            isLiked: props.isLiked
        }
    }

    handleToggleMenu() {
        this.setState({
            open: !this.state.open
        })
    }

    handleEdit(event) {
        event.preventDefault();
        this.props.openEditForm(this.props.post.id);
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.deletePost(this.props.post.id);
    }

    handleLike(event) {
        event.preventDefault();
        this.props.likePost({
            user_id: this.props.currentUser.id,
            post_id: this.props.post.id
        }).then( () => this.setState({
            isLiked: true
        })
        );
    }

    handleUnlike(event) {
        event.preventDefault();
        this.props.unlikePost({
            user_id: this.props.currentUser.id,
            post_id: this.props.post.id
        }).then( () => this.setState({
            isLiked: false
        })
        );
    }

    render() {
        return(
            <div className="post-controls-container">
                {this.props.isOwnPost ? 
                        <button onClick={this.handleToggleMenu}>
                            <i className="fas fa-cog"></i>
                        </button>
                        :
                        this.state.isLiked ?
                            <button className="unlike-button" onClick={this.handleUnlike}>
                                <i className="fas fa-heart"></i>
                            </button>
                            :
                            <button className="like-button" onClick={this.handleLike}>
                                <i className="fas fa-heart"></i>
                            </button>
                }
                {this.state.open ?
                        <div className="post-menu">
                            <button onClick={this.handleEdit}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>
                : <></>}
            </div>
        );
    }
}

export default PostControls;