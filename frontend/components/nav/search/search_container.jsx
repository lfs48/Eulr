import { connect } from "react-redux";
import Search from './search';

const msp = (state) => ({
    users: Object.values(state.entities.users)
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(Search);