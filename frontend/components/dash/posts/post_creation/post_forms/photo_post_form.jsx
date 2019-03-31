import React from 'react';
import { merge } from 'lodash';

class PhotoPostForm extends React.Component {
    
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
                            <div className="post-form-header">
                                <h3>{this.props.author.username}</h3>
                            </div>
                            <input
                                className="post-url-input"
                                type="text"
                                placeholder="Paste a URL"
                                value={this.state.content.url}
                                onChange={this.handleInput("url")}
                            ></input>
                            {disabled ?
                            <></>
                            :
                            <input
                                className="post-body-input"
                                type="text"
                                placeholder="Add a caption, if you like"
                                value={this.state.content.caption}
                                onChange={this.handleInput("caption")}
                            ></input>
                            }
                            <div className="post-form-footer">
                                <input
                                    type="submit"
                                    value="Post"
                                    disabled={disabled}
                                ></input>
                                <button onClick={this.handleCancel}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } 
}

export default PhotoPostForm;