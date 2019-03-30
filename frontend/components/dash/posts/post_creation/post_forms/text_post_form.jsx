import React from 'react';
import { connect } from "react-redux";
import { createPost } from '../../../../../actions/entities/post_actions';
import { merge } from 'lodash';
import Dash from '../../../dash_container';
import PostIndex from '../../post_index/post_index_container';

class PostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            post: props.post,
            content: props.content
        };
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/dashboard");
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const post = merge({}, this.state.post);
        post.content = content;
        this.props.createPost(post).then( () =>
            this.props.history.push("/dashboard")
        );
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
                <PostIndex />
            </div>
        );
    } 
}

const msp = (state) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: "text"
    },
    content: {
        title: "",
        body: ""
    }
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(msp, mdp)(PostForm);