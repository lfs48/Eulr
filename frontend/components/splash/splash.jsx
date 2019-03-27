import React from 'react';
import { Link } from 'react-router-dom'; 
import RegisterForm from './register/register_form_container';

class Splash extends React.Component {
    render() {
        return(
            <div className="splash-container">
            <h1>Euler</h1>
            <p>An infinite series of possibilities converges here.</p>
            <RegisterForm className="register-form"/>
            <Link to="/login">Log In</Link>
            <Link to="/explore">Here's what's trending</Link>
            </div>
        );
    }
}

export default Splash;