import React from 'react';
import { merge } from 'lodash';

class PostForm extends React.Component {
    
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
        if (this.state.content.quote === "") {
            disabled = true;
        }
        return (
            <div className="post-form-container">
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="post-form-header">
                                <h3>{this.props.author.username}</h3>
                            </div>
                            <input
                                className="post-title-input"
                                type="text"
                                placeholder={`"Quote"`}
                                value={this.state.content.quote}
                                onChange={this.handleInput("quote")}
                            ></input>
                            <input
                                className="post-body-input"
                                type="text"
                                placeholder="Source"
                                value={this.state.content.source}
                                onChange={this.handleInput("source")}
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
            </div>
        );
    } 
}

export default PostForm;