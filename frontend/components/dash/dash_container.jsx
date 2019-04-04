import { connect } from "react-redux";
import Dash from './dash';
import { navToggleClear } from "../../actions/ui/nav_actions";
import { fetchUsers } from "../../actions/entities/user_actions";
import { fetchFollows } from "../../actions/entities/follow_actions";

const msp = (state) => ({
    postFormOpen: state.ui.dash === true ? true : false,
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    navToggleClear: () => dispatch( navToggleClear() ),
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchFollows: (id) => dispatch( fetchFollows(id) )
});

export default connect(msp, mdp)(Dash);