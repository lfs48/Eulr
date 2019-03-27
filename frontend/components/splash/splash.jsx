import React from 'react';
import { Link } from 'react-router-dom'; 
import RegisterForm from './register/register_form_container';

class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin() {
        const demoUser = {
            email: "leuler@mathmail.com",
            password: "123456"
        };
        this.props.demoLogin(demoUser).then(
            this.props.history.push("/dashboard")
        );
    }

    render() {
        return(
            <div className="splash-container">
            <h1>Euler</h1>
            <p>An infinite series of possibilities converges here.</p>
            <RegisterForm className="register-form"/>
            <Link to="/login">Log In</Link>
            <button onClick={this.handleDemoLogin}>Demo Login</button>
            <Link to="/explore">Here's what's trending</Link>
            </div>
        );
    }
}

export default Splash;