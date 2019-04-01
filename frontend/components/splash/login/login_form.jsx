import React from 'react';
import ErrorsList from '../../errors/errors_list_container';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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

    componentDidMount() {
        this.props.navToggleLogin();
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
                errors: [],
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
                <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionName="login-transition-1"
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
                >
                <div className="login-container">
                    <h1 className="eulr-header">eulr</h1>
                    <form className="login-form" onSubmit={this.handleNext}>
                        <div className="login-inputs-container">
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        ></input>
                        </div>
                        <input
                            className="login-submit"
                            type="submit"
                            value="Next"
                        ></input>
                    </form>
                    <ErrorsList errorsClass="session-errors" errors={this.state.errors} />
                </div>
                </ReactCSSTransitionGroup>
            );
        } else if (this.state.stage === 2) {
            return (
                <ReactCSSTransitionGroup
                transitionName="login-transition-2"
                transitionEnterTimeout={500}
                transitionLeave={false}
                >
                <div key={1} className="login-container">
                    <h1 className="eulr-header">eulr</h1>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-inputs-container">
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
                        </div>
                        <input className="login-submit"
                            type="submit"
                            value="Log In"
                        ></input>
                    </form>
                    <ErrorsList errorsClass="session-errors" errors={this.state.errors} />
                </div>
                </ReactCSSTransitionGroup>
            );
        }
    }
}

export default LoginForm;