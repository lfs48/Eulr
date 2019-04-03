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
        this.handleTagInput = this.handleTagInput.bind(this);
        this.handleTagKeypress = this.handleTagKeypress.bind(this);
        this.formCancel = props.formCancel.bind(this);
        this.state = {
            stage: this.props.stage,
            post: props.post,
            content: props.content,
            media: props.media,
            tags: props.tags,
            currentTag: ""
        };
    }

    handleCancel(event) {
        event.preventDefault();
        this.formCancel();
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
        if (this.state.media && this.state.media.file) {
            formData.append("post[media]", this.state.media.file);
        }

        this.props.formAction(formData).then( () =>
            this.formCancel()
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
            stage: 3,
            content: {
                caption: "",
                url: ""
            }
        });
    }

    handleTagInput(event) {
        event.preventDefault();
        const input = event.target.value;
        if (input.charAt(input.length - 1) === ",") {
            const tags = merge([], this.state.tags);
            tags.push(input.slice(0, input.length - 1));
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

    handleTagKeypress(event) {
        let tags = merge([], this.state.tags);
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            tags.push(this.state.currentTag);
            this.setState({
                tags: tags,
                currentTag: ""
            });
        } else if (event.key == "Backspace" && this.state.currentTag === "") {
            tags = tags.slice(0, tags.length - 1);
            this.setState({
                tags: tags,
                currentTag: ""
            });
        }
    }

    render() {
        let icon = <></>;
        let caption = "";
        switch (this.props.post.post_type) {
            case("photo"): {
                icon = <i className="fas fa-camera"></i>;
                caption = "Upload photos";
                break;
            }
            case("audio"): {
                icon = <i className="fas fa-headphones"></i>;
                caption = "Upload a song";
                break;
            }
            case("video"): {
                icon = <i className="fas fa-video"></i>;
                caption = "Upload a video";
                break;
            }
        }
        let imgs = <></>
        if (this.state.media) {
            imgs = <li><img src={this.state.media.url}></img></li>
        } else if (this.state.content.url !== "") {
            imgs = <li><img src={this.state.content.url}></img></li>
        }
        const tags = this.state.tags.map((tag, idx) =>
            <li key={idx}>{`#${tag}`}</li>
        );
        let disabled = false;
        if (this.state.content.url === "") {
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
                        <form onSubmit={this.handleSubmit}>
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
                                {this.state.stage === 2 ?
                                <>
                                <ul>
                                    {imgs}
                                </ul>
                                <label htmlFor="additionalUpload">
                                        {icon}
                                        <span>Add Another</span>
                                </label>
                                <input 
                                    className="file-input-invisible"
                                    id="additionalUpload"
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
                                        <ul>
                                            {imgs}
                                        </ul>
                                        <input
                                            className="post-url-input"
                                            type="text"
                                            placeholder="Enter a URL"
                                            value={this.state.content.url}
                                            onChange={this.handleInput("url")}
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