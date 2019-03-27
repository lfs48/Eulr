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
            errors: []
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
        const errorsArr = this.validateInput();
        if (errorsArr.length > 0) {
            this.setState({
                errors: errorsArr
            });
        } else {
            const user = this.buildUser();
            this.props.createUser(user);
            this.props.login(user).then( () =>
                this.props.history.push("/dashboard")
            );
        }
    }

    handleInput(type) {
        return (event) => {
            this.setState({
                [type]: event.target.value
            });
        };
    }

    validateInput() {
        const errors = [];
        const weakPasswords = ["password", "12345678"];
        if (this.state.email === "") {
            errors.push("You forgot to enter your email address!");
        }
        if (this.state.password === "") {
            errors.push("Don't forget your password!");
        } else if (this.state.password.length < 8) {
            errors.push("The password must be at least 8 characters.");
        } else if (weakPasswords.includes(this.state.password)) {
            errors.push("Please choose a stronger password.");
        }
        return errors;
    }

    render() {
        if (this.state.open) {
            const errs = this.state.errors.map( (error, idx) => 
                <li key={idx}>{error}</li>
            );
            return (
                    <div>
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
                    {errs.length > 0 ?
                        <ul>
                            {errs}
                        </ul>
                        :
                        <></>
                    }
                    </div>
                );
        } else {
            return (
                <button onClick={this.handleOpen}>Get Started</button>
            );
        }
    }
}

export default RegisterForm;