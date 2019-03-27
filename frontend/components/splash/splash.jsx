import React from 'react';
import { Link } from 'react-router-dom'; 
import RegisterForm from './register/register_form_container';

class Splash extends React.Component {
    render() {
        return(
            <div>
            <h1>Euler</h1>
            <p>An infinite series of possibilities converges here.</p>
            <RegisterForm />
            </div>
        );
    }
}

export default Splash;