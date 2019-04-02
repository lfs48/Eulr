import { connect } from "react-redux";
import Dash from './dash';
import { navToggleClear } from "../../actions/ui/nav_actions";

const msp = (state) => ({
    postFormOpen: state.ui.dash === true ? true : false,
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    navToggleClear: () => dispatch( navToggleClear() )
});

export default connect(msp, mdp)(Dash);