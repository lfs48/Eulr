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
        this.handleStage2 = this.handleStage2.bind(this);
        this.handleStage3 = this.handleStage3.bind(this);
        this.state = {
            stage: 1,
            post: props.post,
            content: props.content
        };
    }

    handleCancel(event) {
        event.preventDefault();
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
                media: {
                    file: file,
                    url: reader.result
                }
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
            formData.append("post[media]", this.state.media.file);
        }
        this.props.createPost(formData).then( () =>
            this.props.history.push("/dashboard")
        );
    }

    handleStage2(event) {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({
                stage: 2,
                media: {
                    file: file,
                    url: reader.result
                },
                content: {
                    caption: ""
                }
            });
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({
                media: null
            });
        }
    }

    handleStage3(event) {
        event.preventDefault();
        this.setState({
            state: 3,
            content: {
                caption: "",
                url: ""
            }
        });
    }

    render() {
        let imgs = <></>
        if (this.state.media) {
            imgs = <li><img src={this.state.media.url}></img></li>
        }
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
                                    <input type="file" onChange={this.handleStage2}></input>
                                    <button onClick={this.handleStage3}>Add photo from web</button>
                                </div>
                            :<></>}
                            {this.state.stage === 2 ?
                            <>
                            <ul>
                                {imgs}
                            </ul>
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