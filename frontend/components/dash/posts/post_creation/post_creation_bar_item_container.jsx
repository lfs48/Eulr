import { connect } from "react-redux";
import PostCreationBarItem from './post_creation_bar_item';
import { withRouter } from 'react-router-dom';
import { openPostForm } from '../../../../actions/ui/dash_actions';

const msp = (state, ownProps) => ({
    icon: ownProps.icon,
    label: ownProps.label,
    postType: ownProps.postType
});

const mdp = (dispatch) => ({
    
});

export default withRouter( connect(msp, mdp)(PostCreationBarItem) );