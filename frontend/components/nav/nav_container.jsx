import { connect } from "react-redux";
import Navbar from './nav';

const msp = (state) => ({
    loggedIn: state.session.id ? true : false,
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(Navbar);