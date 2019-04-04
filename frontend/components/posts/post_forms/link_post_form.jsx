import React from 'react';
import { merge } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class LinkPostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.formCancel = props.formCancel.bind(this);
        this.urlIsComplete = this.urlIsComplete.bind(this);
        this.handleTagInput = this.handleTagInput.bind(this);
        this.handleTagKeypress = this.handleTagKeypress.bind(this);
        this.state = {
            post: props.post,
            content: props.content,
            tags: props.tags,
            currentTag: ""
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
        const tags = this.state.tags;
        tags.push(this.state.currentTag);
        formData.append("post[tags]", tags.join(","));
        this.props.formAction(formData).then(() =>
            this.formCancel()
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
        this.formCancel();
    }

    urlIsComplete(url) {
        if (url.includes(".com") ) {
            return true;
        }
        return false;
    }

    handleTagInput(event) {
        event.preventDefault();
        const input = event.target.value;
        if (input.charAt(input.length - 1) === ",") {
            const tags = merge([], this.state.tags);
            tags.push(input.slice(0, input.length - 1));
            this.setState({
                tags: tags,
                currentTag: ""
            });
        } else {
            this.setState({
                currentTag: event.target.value
            });
        }
    }

    handleTagKeypress(event) {
        let tags = merge([], this.state.tags);
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            tags.push(this.state.currentTag);
            this.setState({
                tags: tags,
                currentTag: ""
            });
        } else if (event.key == "Backspace" && this.state.currentTag === "") {
            tags = tags.slice(0, tags.length - 1);
            this.setState({
                tags: tags,
                currentTag: ""
            });
        }
    }

    render() {
        const urlComplete = this.urlIsComplete(this.state.content.url);
        const tags = this.state.tags.map((tag, idx) =>
            <li key={idx}>{`#${tag}`}</li>
        );
        return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionLeaveTimeout={250}
                transitionName="post-form-transition"
                transitionEnter={false}
            >
            <div className="post-form-container">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={event => event.preventDefault()}>
                            <div className="post-form-header">
                                <h3>{this.props.author.username}</h3>
                            </div>
                            {urlComplete ?
                            <>
                            <div className="post-link-header-container">
                            <h2 className="post-link-url">{this.state.content.url}</h2>
                            <input  
                                className="post-link-title"
                                type="text"
                                placeholder="Enter a title"
                                value={this.state.content.title}
                                onChange={this.handleInput("title")}
                            ></input>
                            <input
                                className="post-link-summary"
                                type="text"
                                placeholder="Enter a summary"
                                value={this.state.content.summary}
                                onChange={this.handleInput("summary")}
                            ></input>
                            </div>
                            <input
                                className="post-body-input"
                                type="text"
                                placeholder="Add a description, if you like"
                                value={this.state.content.body}
                                onChange={this.handleInput("body")}
                            ></input>
                                    <div className="post-form-tags-container">
                                        <ul>
                                            {tags}
                                        </ul>
                                        <input
                                            className="post-tag-input"
                                            type="text"
                                            placeholder="#tags"
                                            value={this.state.currentTag}
                                            onChange={this.handleTagInput}
                                            onKeyDown={this.handleTagKeypress}
                                        ></input>
                                    </div>
                            </>
                            :
                                <input
                                    className="post-link-url-input"
                                    type="text"
                                    placeholder="Type or paste a URL"
                                    value={this.state.content.url}
                                    onChange={this.handleInput("url")}
                                ></input>
                            }
                            <div className="post-form-footer">
                                <button className="post-form-cancel-button" onClick={this.handleCancel}>Close</button>
                                <button 
                                    className="post-form-submit-button" 
                                    onClick={this.handleSubmit}
                                    disabled={!urlComplete}
                                    >
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
            </ReactCSSTransitionGroup>
        );
    } 
}

export default LinkPostForm;