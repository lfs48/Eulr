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
            <h1 className="eulr-header">eulr</h1>
            <img className="splash-logo" src={window.eulrLogo}></img>
            <p>An infinite series of possibilities converges here.</p>
            <RegisterForm />
            <Link className="splash-login" to="/login">
                <span>Log In</span>
            </Link>
            <button className="demo-button" onClick={this.handleDemoLogin}>Demo Login</button>
            <Link className="splash-explore-link" to="/explore">
                    <i className="far fa-compass"></i>
                    Here's what's trending
            </Link>
            </div>
        );
    }
}

export default Splash;