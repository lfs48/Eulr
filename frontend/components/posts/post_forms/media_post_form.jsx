import React from 'react';
import { merge } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MediaForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            stage: 1,
            post: props.post,
            content: props.content
        };
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.clearDash();
        this.props.history.push("/dashboard");
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

    handleUpload(event) {
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({
                media: file
            });
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({
                media: null
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const formData = new FormData();
        formData.append("post[author_id]", this.state.post.author_id);
        formData.append("post[poster_id]", this.state.post.poster_id);
        formData.append("post[post_type]", this.state.post.post_type);
        formData.append("post[content]", content);
        if (this.state.media) {
            formData.append("post[media]", this.state.media);
        }
        this.props.createPost(formData).then( () =>
            this.props.history.push("/dashboard")
        );
    }

    handleStage(num) {
        return (event) => {
            event.preventDefault();
            this.setState({
                stage: num,
                content: {
                    caption: "",
                    url: ""
                }
            });
        };
    }

    render() {
        return(
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
                            {this.state.stage === 1 ?
                                <div>
                                    <button onClick={this.handleStage(2)}>Upload photos</button>
                                    <button onClick={this.handleStage(3)}>Add photo from web</button>
                                </div>
                            :<></>}
                            {this.state.stage === 2 ?
                            <>
                            <input 
                                type="file" 
                                onChange={this.handleUpload}
                            ></input>
                            <input
                                className="post-body-input"
                                type="text"
                                placeholder="Enter a caption, if you like"
                                value={this.state.content.caption}
                                onChange={this.handleInput("caption")}
                            ></input>
                            </>
                            :<></>}
                            {this.state.stage === 3 ?
                                <>
                                    <input
                                        className="post-url-input"
                                        type="text"
                                        placeholder="Enter a URL"
                                        value={this.state.content.url}
                                        onChange={this.handleInput("url")}
                                    ></input>
                                    <input
                                        className="post-body-input"
                                        type="text"
                                        placeholder="Enter a caption, if you like"
                                        value={this.state.content.caption}
                                        onChange={this.handleInput("caption")}
                                    ></input>
                                </>
                            : <></>}
                            <div className="post-form-footer">
                                <button onClick={this.handleCancel}>Close</button>
                                <input
                                    type="submit"
                                    value="Post"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactCSSTransitionGroup >
        );
    }
}

export default MediaForm;