import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashHeader from './dash_header';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({

});

export default withRouter( connect(msp, mdp)(DashHeader) );