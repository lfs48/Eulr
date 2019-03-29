import React from 'react';
import { connect } from "react-redux";
import { createPost } from '../../../../../actions/entities/post_actions';
import { merge } from 'lodash';
import Dash from '../../../dash_container';

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
        this.props.createPost(post).then(() =>
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
        if (this.state.content.url === "" ) {
            disabled = true;
        }
        return (
            <div className="post-form-container">
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="Paste a URL"
                                value={this.state.content.url}
                                onChange={this.handleInput("url")}
                            ></input>
                            <input
                                type="submit"
                                value="Post"
                                disabled={disabled}
                            ></input>
                        </form>

                    </div>
                </div>
                <Dash></Dash>
            </div>
        );
    }
}

const msp = (state) => ({
    post: {
        author_id: state.session.id,
        poster_id: state.session.id,
        post_type: "photo"
    },
    content: {
        url: ""
    }
});

const mdp = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(msp, mdp)(PostForm);