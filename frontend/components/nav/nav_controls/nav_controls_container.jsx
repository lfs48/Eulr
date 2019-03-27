import { connect } from "react-redux";
import NavControls from './nav_controls';
import { logout } from "../../../actions/session/session_actions";
import { withRouter } from 'react-router-dom';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
    logout: () => dispatch( logout() )
});

export default withRouter(connect(msp, mdp)(NavControls));