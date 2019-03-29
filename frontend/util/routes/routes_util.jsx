import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact}
        render={
            (props) => {
                if (loggedIn) {
                    return (<Redirect to="/dashboard" />);
                } else {
                    return (<Component {...props} />);
                }
            }
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    return (
    <Route path={path} exact={exact}
        render={
            (props) => {
                if (loggedIn) {
                    return (<Component {...props} />);
                } else {
                    return (<Redirect to="/" />);
                }
            }
        }
    />
    );
};

const msp = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = connect(msp, null)(Auth);
export const ProtectedRoute = connect(msp, null)(Protected);