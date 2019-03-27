import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = props.user;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.loginUser(this.state);
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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInput("email")}
                ></input>
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                ></input>
                <input
                    type="submit"
                    value="Log In"
                ></input>
            </form>
        );
    }
}

export default LoginForm;