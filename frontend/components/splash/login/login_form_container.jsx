import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../../actions/session/session_actions';

const msp = (state) => ({
    user: {
        email: "",
        password: ""
    }
});

const mdp = (dispatch) => ({
    loginUser: (user) => dispatch(login(user))
});

const ConnectedForm = connect(msp, mdp)(LoginForm);

export default () => {
    return (
        <div>
            <Link to="/">Sign Up</Link>
            <ConnectedForm />
        </div>
    );
};