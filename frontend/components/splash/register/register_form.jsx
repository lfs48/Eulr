import React from 'react';
import { Redirect } from 'react-router-dom';
import { merge } from 'lodash';

class RegisterForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.buildUser = this.buildUser.bind(this);
        this.state = {
            email: "",
            username: "",
            password: "",
            open: false,
            redirect: false
        };
    }

    buildUser() {
        const user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };
        return user;
    }

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = this.buildUser();
        this.props.createUser(user);
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
            return (
                <Redirect to="/dashboard" />
            );
        }
        if (this.state.open) {
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
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                        ></input>
                        <input
                            type="submit"
                            value="Sign Up"
                        ></input>
                    </form>
                );
        } else {
            return (
                <button onClick={this.handleOpen}>Get Started</button>
            );
        }
    }
}

export default RegisterForm;