import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../../actions/session/session_actions';

const msp = (state) => ({
    user: {
        email: "",
        password: ""
    },
    stateErrors: state.errors.session
});

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

const ConnectedForm = withRouter(connect(msp, mdp)(LoginForm));

export default () => {
    return (
        <div>
            <Link to="/">Sign Up</Link>
            <ConnectedForm className="login-form"/>
        </div>
    );
};