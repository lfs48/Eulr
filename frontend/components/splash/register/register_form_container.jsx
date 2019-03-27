import RegisterForm from './register_form';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/entities/user_actions';

const msp = (state) => ({
    user: {
        username: "",
        email: "",
        password: ""
    }
});

const mdp = (dispatch) => ({
    createUser: (user) => dispatch( createUser(user) )
});

export default connect(msp, mdp)(RegisterForm);