import React from 'react';
import { connect } from "react-redux";
import { createPost } from '../../../../../actions/entities/post_actions';
import { merge } from 'lodash';

class PostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            post: props.post,
            content: props.content
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = JSON.stringify(this.state.content);
        const post = merge({}, this.state.post);
        post.content = content;
        this.props.createPost(post);
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

    render() {
        let disabled = false;
        if (this.state.content.title === "" && this.state.content.body === "") {
            disabled = true;
        }
        return (
            <div className="post-form-container">
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
                </form>
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