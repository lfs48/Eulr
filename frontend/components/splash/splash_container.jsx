import Splash from './splash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session/session_actions';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
    demoLogin: (user) => dispatch( login(user) )
});

export default withRouter(connect(msp, mdp)(Splash));