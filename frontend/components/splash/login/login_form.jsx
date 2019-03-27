import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.state = {
            email: "",
            password: "",
            stage: 1,
            redirect: false
        };
    }

    handleNext(event) {
        event.preventDefault();
        this.setState({
            stage: 2
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user);
        this.setState({
            redirect: true
        });
    }

    handleInput(type) {
        return (event) => {
            this.setState({
                [type]: event.target.value
            });
        };
    }

    render() {
        if (this.state.redirect) {
            return(
                <Redirect to="/dashboard" />
            );
        }
        if (this.state.stage === 1) {
            return (
                <form onSubmit={this.handleNext}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    ></input>
                    <input
                        type="submit"
                        value="Next"
                    ></input>
                </form>
            );
        } else if (this.state.stage === 2) {
            return (
                <form onSubmit={this.handleSubmit}>
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
}

export default LoginForm;