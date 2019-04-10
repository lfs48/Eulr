import React from 'react';
import { merge } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as PostFormUtil from '../../../util/forms/post_form_util';

class MediaForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = PostFormUtil.handleInput.bind(this);
        this.handleSubmit = PostFormUtil.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleCancel = PostFormUtil.handleCancel.bind(this);
        this.handleStage2 = this.handleStage2.bind(this);
        this.handleStage3 = this.handleStage3.bind(this);
        this.handleTagInput = PostFormUtil.handleTagInput.bind(this);
        this.handleTagKeypress = PostFormUtil.handleTagKeypress.bind(this);
        this.formCancel = props.formCancel.bind(this);
        this.handleRemoveFile = this.handleRemoveFile.bind(this);
        this.handleUrlInput = this.handleUrlInput.bind(this);
        this.handleUrlComplete = this.handleUrlComplete.bind(this);
        this.state = {
            stage: this.props.stage,
            post: props.post,
            content: props.content,
            media: props.media,
            tags: props.tags,
            currentTag: "",
            urls: props.urls,
            currentUrl: "",
        };
    }

    handleUpload(event) {
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        const files = merge([], this.state.media.files);
        files.push(file);
        const urls = merge([], this.state.media.urls);
        reader.onloadend = () => {
            urls.push(reader.result);
            this.setState({
                media: {
                    files: files,
                    urls: urls
                }
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({
                media: this.state.media
            });
        }
    }

    handleStage2(event) {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({
                stage: 2,
                media: {
                    files: [file],
                    urls: [reader.result]
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
            stage: 3,
            content: {
                caption: ""
            }
        });
    }

    handleRemoveFile(idx) {
        return (event) => {
            event.preventDefault();
            let files = merge([], this.state.media.files);
            let urls = merge([], this.state.media.urls);
            files = files.slice(0, idx).concat(files.slice(idx+1, files.length));
            urls =urls.slice(0, idx).concat(urls.slice(idx + 1, urls.length));
            if (files.length < 1) {
                this.setState({
                    media: null,
                    stage: 1
                });
            } else {
                this.setState({
                    media: {
                        files: files,
                        urls: urls
                    }
                });
            }
        };
    }

    handleUrlInput(event) {
        clearTimeout(this.state.timer);
        event.preventDefault();
        this.setState({
            currentUrl: event.target.value,
            timer: setTimeout( this.handleUrlComplete, 3000 )
        });
    }

    handleUrlComplete() {
        $.get(this.state.content.url)
        .then( () => {
            const urls = merge([], this.state.urls);
            urls.push(this.state.currentUrl);
            this.setState({
                urls: urls,
                currentUrl: ""
            })
        }, () => {}
        )
    }

    render() {
        let icon = <></>;
        let caption = "";
        let file_types = "";
        let preview = <></>
        switch (this.props.post.post_type) {
            case("photo"): {
                icon = <i className="fas fa-camera"></i>;
                caption = "Upload photos";
                file_types = ".jpg, .gif, .png, .jpeg"


                if (this.state.media) {
                    preview = this.state.media.urls.map((url, idx) =>
                        <li key={idx}>
                            <img src={url}></img>
                            <button onClick={this.handleRemoveFile(idx)}>X</button>
                        </li>
                    );
                } else {
                    preview = this.state.urls.map((url, idx) =>
                        <li key={idx}>
                            <img src={url}></img>
                            <button onClick={this.handleRemoveFile(idx)}>X</button>
                        </li>
                    );
                }

                break;
            }
            case("audio"): {
                icon = <i className="fas fa-headphones"></i>;
                caption = "Upload a song";
                file_types = ".mp3"

                if (this.state.media) {
                    preview = this.state.media.urls.map((url, idx) =>
                        preview = <li key={idx}>
                            <audio
                                src={url}
                                controls={true}
                                width={540}
                                height={304}
                            ></audio>
                            <button onClick={this.handleRemoveFile(idx)}>X</button>
                        </li>
                    );
                } else if (this.state.content.url !== "") {
                    preview = <li>
                        <audio
                            src={this.state.content.url}
                            controls={true}
                            width={540}
                            height={304}
                        ></audio>
                    </li>
                }

                break;
            }
            case("video"): {
                icon = <i className="fas fa-video"></i>;
                caption = "Upload a video";
                file_types = ".mp4"

                if (this.state.media) {
                    preview = this.state.media.urls.map((url, idx) =>
                        preview = <li key={idx}>
                            <video
                                src={url}
                                controls={true}
                                width={540}
                                height={304}
                            ></video>
                            <button onClick={this.handleRemoveFile(idx)}>X</button>
                        </li>
                    );
                } else if (this.state.content.url !== "") {
                    preview = <li>
                            <video 
                                src={this.state.content.url}
                                controls={true}
                                width={540}
                                height={304}
                                ></video>
                        </li>
                }

                break;
            }
        }
        
        const tags = this.state.tags.map((tag, idx) =>
            <li key={idx}>{`#${tag}`}</li>
        );
        let disabled = false;
        if (this.state.urls.length < 1) {
            disabled = true;
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
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="post-form-header">
                                <h3>{this.props.author.username}</h3>
                            </div>
                            {this.state.stage === 1 ?
                                <div className="post-media-option-container">
                                    <div className="post-media-option-left">
                                    <label htmlFor="upload" className="media-option-button">
                                        {icon}
                                        <span>{caption}</span>
                                    </label>
                                    <input 
                                        className="file-input-invisible"
                                        id="upload" 
                                        type="file" 
                                        accept={file_types}
                                        onChange={this.handleStage2}
                                    ></input>
                                    </div>
                                    <div className="post-media-option-right">
                                    <button onClick={this.handleStage3} className="media-option-button">
                                        <i className="fas fa-globe"></i>
                                        <span>Add {this.props.post.post_type} from web</span>
                                    </button>
                                    </div>
                                </div>
                            :<></>}
                            <div className="media-post-body-container">
                                {this.state.stage !== 1 ?
                                    <ul>
                                        {preview}
                                    </ul>
                                    : <></>}
                                {this.state.stage === 2 ?
                                <>
                                {this.props.post.post_type === "photo" ?
                                    <>
                                    <label htmlFor="additionalUpload">
                                        {icon}
                                        <span>Add Another</span>
                                    </label>
                                    <input 
                                        className="file-input-invisible"
                                        id="additionalUpload"
                                        type="file" 
                                        accept={file_types}
                                        onChange={this.handleUpload}
                                    ></input>
                                    </>
                                :<></>}
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
                                            value={this.state.currentUrl}
                                            onChange={this.handleUrlInput}
                                        ></input>
                                        {disabled ?
                                        <></>
                                        :
                                        <input
                                            className="post-body-input"
                                            type="text"
                                            placeholder="Enter a caption, if you like"
                                            value={this.state.content.caption}
                                            onChange={this.handleInput("caption")}
                                        ></input>
                                        }
                                    </>
                                : <></>}
                                {this.state.stage === 4 ?
                                    <input
                                        className="post-body-input"
                                        type="text"
                                        placeholder="Enter a caption, if you like"
                                        value={this.state.content.caption}
                                        onChange={this.handleInput("caption")}
                                    ></input>

                                :<></>}
                            </div>
                            {this.state.stage !== 1 ?
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
                            :<></>}
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
            </ReactCSSTransitionGroup >
        );
    }
}

export default MediaForm;