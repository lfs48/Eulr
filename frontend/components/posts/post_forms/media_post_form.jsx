import React from 'react';
import { merge } from 'lodash';

class MediaForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {
            post: props.post,
            content: props.content
        };
    }

    handleInput(type) {
        return (event) => {
            const content = merge({}, this.state.content);
            content[type] = event.target.value;
            this.setState({
                content: content
            });
        };
    }

    handleUpload(event) {
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({
                media: file
            });
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({
                media: null
            });
        }
    }

    // handleSubmit: function(event) {
    // event.preventDefault();
    // const content = JSON.stringify(this.state.content);
    // const post = merge({}, this.state.post);
    // post.content = content;
    // this.props.createPost(post).then(() => {
    //     this.props.clearDash();
    //     this.props.history.push("/dashboard");
    // }
    // );
    // }

    handleSubmit(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const formData = new FormData();
        formData.append("post[author_id]", this.state.post.author_id);
        formData.append("post[poster_id]", this.state.post.poster_id);
        formData.append("post[post_type]", this.state.post.post_type);
        formData.append("post[content]", content);
        if (this.state.media) {
            formData.append("post[media]", this.state.media);
        }
        this.props.createPost(formData).then( () =>
            this.props.history.push("/dashboard")
        );
    }

    render() {
        return(
            <div className="modal-child">
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleUpload}></input>
                    <input
                        className="post-caption-input"
                        type="text"
                        placeholder="Enter a caption, if you like"
                        value={this.state.content.caption}
                        onChange={this.handleInput("caption")}
                    ></input>
                <input type="submit" value="Post"></input>
            </form>
            </div>
        );
    }
}

export default MediaForm;