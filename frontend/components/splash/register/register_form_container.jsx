import RegisterForm from './register_form';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/entities/user_actions';
import { login } from '../../../actions/session/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
    createUser: (user) => dispatch( createUser(user) ),
    login: (user) => dispatch( login(user) )
});

export default withRouter(connect(msp, mdp)(RegisterForm));