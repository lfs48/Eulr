import React from 'react';

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

export default PostForm;