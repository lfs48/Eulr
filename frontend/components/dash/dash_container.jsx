import { connect } from "react-redux";
import Dash from './dash';

const msp = (state) => ({
    postFormOpen: state.ui.dash === true ? true : false
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(Dash);