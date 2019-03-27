import React from 'react';

class RegisterForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = props.user;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createUser(this.state);
    }

    handleInput(type) {
        return (event) => {
            this.setState({
                [type]: event.target.value
            });
        };
    }

    render() {
        return(
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
    }
}

export default RegisterForm;