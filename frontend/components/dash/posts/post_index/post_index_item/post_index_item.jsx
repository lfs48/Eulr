import React from 'react';
import TextPostEditForm from '../../../../posts/post_forms/text_post_edit_container';
import PostNotesIndex from '../../../../posts/post_notes/post_notes_index_container';

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.state = {
            open: false
        };
    }

    handleEdit() {
        this.props.openEditForm(this.props.post.id);
    }

    handleDelete() {
        this.props.deletePost(this.props.post.id);
    }

    handleLike(event) {
        event.preventDefault();
    }

    formatContent(post) {
        const content = JSON.parse(post.content);
        switch(post.post_type) {
            case("text"): {
                return (
                    <div className="text-post-body">
                    <h4>{content.title}</h4>
                    <p>{content.body}</p>
                    </div>
                );
            }
            case ("photo"): {
                let imgs = <></>
                if (post.mediaUrls.length >= 1) { 
                    imgs = post.mediaUrls.map( (url, idx) =>
                        <li key={idx}>
                            <img className="photo-post-img" src={url}></img>
                        </li>
                        )
                } else {
                    imgs = <li>
                        <img className="photo-post-img" src={content.url}></img>
                    </li>
                }
                return (
                    <div className="photo-post-body">
                        <ul>
                            {imgs}
                        </ul>
                        <p>{content.caption}</p>
                    </div>
                );
            }
            case ("quote"): {
                return (
                    <div className="quote-post-body">
                        <h4>"{content.title}"</h4>
                        <p>- {content.body}</p>
                    </div>
                );
            }
            case ("link"): {
                return (
                    <div className="link-post-body">
                        <div className="post-link-header-container">
                            <a href={content.url}>
                            <h2 className="post-link-url">{content.url}</h2>
                            <h3 className="post-link-title">{content.title}</h3>
                            <span className="post-link-summary">{content.summary}</span>
                            </a>
                        </div>
                        <p>{content.body}</p>
                    </div>
                );
            }
            case ("chat"): {
                return (
                    <div className="chat-post-body">
                        <h4>{content.title}</h4>
                        <p>{content.body}</p>
                    </div>
                );
            }
            case ("audio"): {
                return (
                    <div className="audio-post-body">
                        <audio
                            controls={true}
                            width={540}
                            height={304}
                        >
                            <source
                                src={post.mediaUrls[0]}
                                type="audio/mp3"
                            ></source>
                        </audio>
                        <p>{content.caption}</p>
                    </div>
                );
            }
            case ("video"): {
                return (
                    <div className="video-post-body">
                        <video 
                            controls={true}
                            width={540} 
                            height={304}
                        >
                            <source
                                src={post.mediaUrls[0]}
                                type="video/mp4"
                                ></source>
                        </video>
                        <p>{content.caption}</p>
                    </div>
                );
            }
        }
    }
    
    handleToggleMenu() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const tags = this.props.tags.map( (tag, idx) =>
            <li key={idx}>
                <span>#{tag}</span>
            </li>
        )
        return(
                <>
                    <div className="post-container">
                        <div className="post-header-container">
                            <h4>{this.props.author ? this.props.author.username : ""}</h4>
                        </div>
                        <div className="post-body-container">
                        {this.formatContent(this.props.post)}
                        </div>
                        <div className="post-tags-container">
                            <ul>
                                {tags}
                            </ul>
                        </div>
                        <div className="post-footer-container">
                        <PostNotesIndex post={this.props.post}/>
                        {this.props.isOwnPost ? 
                        <button onClick={this.handleToggleMenu}>
                            <i className="fas fa-cog"></i>
                        </button>
                        :
                        <button onClick={this.handleLike}>
                            <i className="fas fa-heart"></i>
                        </button>
                        }
                        </div>
                    </div>
                    {this.state.open ?
                        <div className="post-menu">
                            <button onClick={this.handleEdit}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>
                    : <></>}
                </>
            )
    }
}

export default PostIndexItem;