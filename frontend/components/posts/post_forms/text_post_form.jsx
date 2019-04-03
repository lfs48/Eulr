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
        this.state = {
            post: props.post,
            content: props.content,
            tags: [],
            currentTag: ""
        };
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/dashboard");
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
        this.props.formAction(formData).then(() =>
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

    handleTagInput(event) {
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

    render() {
        let disabled = false;
        if (this.state.content.title === "" && this.state.content.body === "") {
            disabled = true;
        }
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
                        <form onSubmit={this.handleSubmit}>
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
                            <input
                                className="post-tag-input"
                                type="text"
                                placeholder="#tags"
                                value={this.state.currentTag}
                                onChange={this.handleTagInput}
                            ></input>
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
            </ReactCSSTransitionGroup>
        );
    }
}

export default TextPostForm;