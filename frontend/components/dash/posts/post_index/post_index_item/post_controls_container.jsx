import { connect } from 'react-redux';
import PostControls from './post_controls';

const msp = (state, ownProps) => ({
    post: ownProps.post
});

const mdp = (dispatch) => ({

})

export default connect(msp, mdp)(PostControls);