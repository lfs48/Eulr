import connect from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashHeader from './dash_header';

const msp = (state) => ({

});

const mdp = (dispatch) => ({

});

export default withRouter(connect(mdsp, mdp)(DashHeader));