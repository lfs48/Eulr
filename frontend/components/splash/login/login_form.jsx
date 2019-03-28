import React from 'react';
import ErrorsList from '../../errors/errors_list_container';

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
            errors: []
        };
    }

    handleNext(event) {
        event.preventDefault();
        const errs = this.validateEmail();
        if (errs.length > 0) {
            this.setState({
                errors: errs
            });
        } else {
            this.setState({
                stage: 2
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user).then( () => 
                this.props.history.push("/dashboard"),
                () => this.setState({
                    errors: [this.props.stateErrors]
                })
        );
    }

    handleInput(type) {
        return (event) => {
            this.setState({
                [type]: event.target.value
            });
        };
    }

    validateEmail() {
        const errors = [];
        const re = /\S+@\S+\.\S+/;
        if (this.state.email === "") {
            errors.push("Oops. There was an error. Try again.");
        } else if (!re.test(this.state.email)) {
            errors.push("That's not a valid email address. Please try again.");
        }
        return errors;
    }

    validatePassword() {
        
    }

    render() {
        if (this.state.stage === 1) {
            return (
                <div className="login-container">
                    <h1 className="eulr-header">eulr</h1>
                    <form className="login-form" onSubmit={this.handleNext}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        ></input>
                        <input
                            className="login-submit"
                            type="submit"
                            value="Next"
                        ></input>
                    </form>
                    <ErrorsList errors={this.state.errors} />
                </div>
            );
        } else if (this.state.stage === 2) {
            return (
                <div className="login-form-container">
                <h1 className="eulr-header">eulr</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
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
                    <ErrorsList errors={this.state.errors} />
                </div>
            );
        }
    }
}

export default LoginForm;