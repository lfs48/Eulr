import { connect } from "react-redux";
import NavControls from './nav_controls';
import { withRouter } from 'react-router-dom';

const msp = (state) => ({

});

const mdp = (dispatch) => ({

});

export default withRouter(connect(msp, mdp)(NavControls));