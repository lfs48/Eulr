import React from 'react';

class TextPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = props.handleSubmit.bind(this);
        this.handleInput = props.handleInput.bind(this);
        this.handleCancel = props.handleCancel.bind(this);
        this.state = {
            post: props.post,
            content: props.content
        };
    }

    render() {
        let disabled = false;
        if (this.state.content.title === "" && this.state.content.body === "") {
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

export default TextPostForm;