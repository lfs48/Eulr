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

    render() {
        return(
            <div>
                <h4>{this.props.author ? this.props.author.username : ""}</h4>
                <span>{this.props.post.content}</span>
                {this.props.isOwnPost ? 
                (<>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                </>)
                :
                <button>Reblog</button>
                }
            </div>
        )
    }
}

export default PostIndexItem;