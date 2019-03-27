import React from 'react';
import { logout } from "../../actions/session/session_actions";
import { connect } from "react-redux";

class Logout extends React.Component {

    componentDidMount() {
        this.props.logout().then( () =>
            this.props.history.push("/")
        );
    }

    render() {
        return (
            <></>
        );
    }
};

const mdp = (dispatch) => ({
    logout: () => dispatch( logout() )
});

export default connect(null, mdp)(Logout);