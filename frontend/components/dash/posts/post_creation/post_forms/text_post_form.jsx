import React from 'react';
import { connect } from "react-redux";

class PostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = props.post;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleInput(type) {
        return (event) => {
            this.setState({
                [type]: event.target.value
            });
        };
    }

    render() {
        return (
            <div className="post-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleInput("title")}
                    ></input>
                    <input
                        type="text"
                        placeholder="Your text here"
                        value={this.state.content}
                        onChange={this.handleInput("content")}
                    ></input>
                    <input
                        type="submit"
                        value="Post"
                    ></input>
                </form>
            </div>
        );
    } 
}

const msp = (state) => ({
    post: {
        title: "",
        content: ""
    }
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(msp, mdp)(PostForm);