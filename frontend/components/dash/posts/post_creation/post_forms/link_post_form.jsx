import React from 'react';
import { merge } from 'lodash';

class LinkPostForm extends React.Component {
    
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
        if (this.state.content.url === "") {
            disabled = true;
        }
        return (
            <div className="post-form-container">
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={this.handleSubmit}>
                            <input
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
                                type="text"
                                placeholder="Add a description, if you like"
                                value={this.state.content.description}
                                onChange={this.handleInput("description")}
                            ></input>
                            </>
                            }
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

export default LinkPostForm;