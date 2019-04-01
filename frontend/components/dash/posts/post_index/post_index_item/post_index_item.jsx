import React from 'react';

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit() {
        this.props.history.push(`/dashboard/edit/${this.props.post.post_type}/${this.props.post.id}`)
    }

    handleDelete() {
        this.props.deletePost(this.props.post.id);
    }

    componentDidMount() {
        this.props.author ? null : this.props.fetchUser(this.props.post.author_id);
    }

    formatContent(post) {
        const content = JSON.parse(post.content);
        switch(post.post_type) {
            case("text"): {
                return (
                    <div className="text-post-body">
                    <h4>{content.title}</h4>
                    <p>{content.body}</p>
                    </div>
                );
            }
        }
    }

    render() {
        return(
            <div className="post-avatar-wrapper">
                <img className="avatar" src={this.props.author.avatar}></img>
                <div className="post-container">
                    <div className="post-header-container">
                        <h4>{this.props.author ? this.props.author.username : ""}</h4>
                    </div>
                    <div className="post-body-container">
                    {this.formatContent(this.props.post)}
                    </div>
                    <div className="post-footer-container">
                    {this.props.isOwnPost ? 
                    (<>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                    </>)
                    :
                    <button>Reblog</button>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;