import ErrorsList from './errors_list';
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
    errors: ownProps.errors
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(ErrorsList);