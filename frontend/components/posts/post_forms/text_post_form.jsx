import React from 'react';
import { merge } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { throws } from 'assert';

class TextPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleTagInput = this.handleTagInput.bind(this);
        this.formCancel = props.formCancel.bind(this);
        this.handleTagKeypress = this.handleTagKeypress.bind(this);
        this.state = {
            post: props.post,
            content: props.content,
            tags: props.tags,
            currentTag: ""
        };
    }

    handleCancel(event) {
        event.preventDefault();
        this.formCancel();
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const formData = new FormData();
        if (this.state.post.id) {
            formData.append("post[id]", this.state.post.id);
        }
        formData.append("post[author_id]", this.state.post.author_id);
        formData.append("post[poster_id]", this.state.post.poster_id);
        formData.append("post[post_type]", this.state.post.post_type);
        formData.append("post[content]", content);
        const tags = this.state.tags;
        tags.push(this.state.currentTag);
        formData.append("post[tags]", tags.join(","));
        this.props.formAction(formData)
        .then(() => this.props.fetchTags())
        .then(() => this.formCancel());
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

    handleTagInput(event) {
        event.preventDefault();
        const input = event.target.value;
        if (input.charAt(input.length - 1) === ",") {
            const tags = merge([], this.state.tags);
            tags.push(input.slice(0, input.length-1));
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
        if(event.key === "Enter" || event.key === ",") {
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
        let disabled = false;
        if (this.state.content.title === "" && this.state.content.body === "") {
            disabled = true;
        }
        const tags = this.state.tags.map( (tag, idx) =>
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
            <div key={1} className="post-form-container">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="post-form-header">
                                <h3>{this.props.author.username}</h3>
                            </div>
                            <input
                                className="post-title-input"
                                type="text"
                                placeholder={this.props.titlePlaceholder}
                                value={this.state.content.title}
                                onChange={this.handleInput("title")}
                            ></input>
                            <input
                                className="post-body-input"
                                type="text"
                                placeholder={this.props.bodyPlaceholder}
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
                            <div className="post-form-footer">
                                <button className="post-form-cancel-button" onClick={this.handleCancel}>Close</button>
                                <button 
                                    className="post-form-submit-button" 
                                    onClick={this.handleSubmit}
                                    disabled={disabled}
                                    >Post
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default TextPostForm;