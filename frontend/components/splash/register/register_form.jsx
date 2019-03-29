import React from 'react';
import ErrorsList from '../../errors/errors_list_container';

class RegisterForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.buildUser = this.buildUser.bind(this);
        this.state = {
            email: "",
            username: "",
            password: "",
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

    handleSubmit(event) {
        event.preventDefault();
        const errorsArr = this.validateInput();
        if (errorsArr.length > 0) {
            this.setState({
                errors: errorsArr
            });
        } else {
            const user = this.buildUser();
            this.props.createUser(user)
            .then( (user) => this.props.login(user),
                () => this.setState({
                    errors: this.props.stateErrors
                })
            )
            .then( () => this.props.history.push("/dashboard") );
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
            return (
                    <div className="register-container">
                    <form className="register-form" onSubmit={this.handleSubmit }>
                        <div className="register-inputs-container">
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
                        </div>
                        <input 
                            className="register-submit"
                            type="submit"
                            value="Sign Up"
                        ></input>
                    </form>
                    <ErrorsList errorsClass="session-errors" errors={this.state.errors} />
                    </div>
                );
    }
}

export default RegisterForm;