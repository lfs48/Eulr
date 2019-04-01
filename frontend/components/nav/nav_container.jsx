import { connect } from "react-redux";
import Navbar from './nav';
import { withRouter } from 'react-router-dom';

const msp = (state) => ({
    loggedIn: state.session.id ? true : false,
    nav: state.ui.nav
});

const mdp = (dispatch) => ({

});

export default withRouter(connect(msp, mdp)(Navbar));