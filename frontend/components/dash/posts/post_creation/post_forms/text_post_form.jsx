import React from 'react';
import { merge } from 'lodash';

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
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="Title"
                                value={this.state.content.title}
                                onChange={this.handleInput("title")}
                            ></input>
                            <input
                                type="text"
                                placeholder="Your text here"
                                value={this.state.content.body}
                                onChange={this.handleInput("body")}
                            ></input>
                            <input
                                type="submit"
                                value="Post"
                                disabled={disabled}
                            ></input>
                            <button onClick={this.handleCancel}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } 
}

export default TextPostForm;