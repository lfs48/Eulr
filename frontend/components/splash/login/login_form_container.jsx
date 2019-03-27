import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../../actions/session/session_actions';

const msp = (state) => ({
    user: {
        email: "",
        password: ""
    }
});

const mdp = (dispatch) => ({
    loginUser: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(LoginForm);