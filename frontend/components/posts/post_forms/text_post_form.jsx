import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { throws } from 'assert';
import * as PostFormUtil from '../../../util/forms/post_form_util';

class TextPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = PostFormUtil.handleSubmit.bind(this);
        this.handleInput = PostFormUtil.handleInput.bind(this);
        this.handleCancel = PostFormUtil.handleCancel.bind(this);
        this.handleTagInput = PostFormUtil.handleTagInput.bind(this);
        this.formCancel = props.formCancel.bind(this);
        this.handleTagKeypress = PostFormUtil.handleTagKeypress.bind(this);
        this.state = {
            post: props.post,
            content: props.content,
            tags: props.tags,
            currentTag: ""
        };
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