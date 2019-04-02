import React from 'react';
import { merge } from 'lodash';

class LinkPostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            post: props.post,
            content: props.content
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const formData = new FormData();
        formData.append("post[author_id]", this.state.post.author_id);
        formData.append("post[poster_id]", this.state.post.poster_id);
        formData.append("post[post_type]", this.state.post.post_type);
        formData.append("post[content]", content);
        this.props.createPost(formData).then(() =>
            this.props.history.push("/dashboard")
        );
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

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/dashboard");
    }

    render() {
        let disabled = false;
        if (this.state.content.url === "") {
            disabled = true;
        }
        return (
            <div className="post-form-container">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="post-form-header">
                                <h3>{this.props.author.username}</h3>
                            </div>
                            <input
                                className="post-url-input"
                                type="text"
                                placeholder="Type or paste a URL"
                                value={this.state.content.url}
                                onChange={this.handleInput("url")}
                            ></input>
                            {disabled ?
                            <></>
                            :
                            <>
                            <input
                                type="text"
                                placeholder="Title"
                                value={this.state.content.title}
                                onChange={this.handleInput("title")}
                            ></input>
                            <input
                                type="text"
                                placeholder="Summary"
                                value={this.state.content.summary}
                                onChange={this.handleInput("summary")}
                            ></input>
                            <input
                                className="post-body-input"
                                type="text"
                                placeholder="Add a description, if you like"
                                value={this.state.content.description}
                                onChange={this.handleInput("description")}
                            ></input>
                            </>
                            }
                            <div className="post-form-footer">
                                <button onClick={this.handleCancel}>Close</button>
                                <input
                                    type="submit"
                                    value="Post"
                                    disabled={disabled}
                                ></input>
                            </div>
                        </form>
                    </div>
            </div>
        );
    } 
}

export default LinkPostForm;