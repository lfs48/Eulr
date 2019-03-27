import { connect } from "react-redux";
import AccountControls from './account_controls_index';
import { logout } from "../../../actions/session/session_actions";
import { withRouter } from 'react-router-dom';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(AccountControls));