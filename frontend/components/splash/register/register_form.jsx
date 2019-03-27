import React from 'react';
import { merge } from 'lodash';

class RegisterForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.state = {
            user: props.user,
            open: false
        };
    }

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = this.state.user;
        this.props.createUser(user);
    }

    handleInput(type) {
        return (event) => {
            const user = merge({}, this.state.user);
            user[type] = event.target.value;
            this.setState({
                user: user
            });
        };
    }

    render() {
        if (this.state.open) {
        return(
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.user.email}
                        onChange={this.handleInput("email")}
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.user.password}
                        onChange={this.handleInput("password")}
                    ></input>
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.user.username}
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