import RegisterForm from './register_form';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/entities/user_actions';
import { login } from '../../../actions/session/session_actions';
import { withRouter } from 'react-router-dom';
import { navToggleRegister } from '../../../actions/ui/nav_actions';

const msp = (state) => ({
    stateErrors: state.errors.session
});

const mdp = (dispatch) => ({
    createUser: (user) => dispatch( createUser(user) ),
    login: (user) => dispatch( login(user) ),
    navToggleRegister: () => dispatch( navToggleRegister() )
});

export default withRouter(connect(msp, mdp)(RegisterForm));