import { connect } from 'react-redux';
import PostNotesIndex from './post_notes_index';

const msp = (state, ownProps) => {
    const likers = Object.values(state.entities.users).filter( (user) =>
        ownProps.post.likers.includes(user.id)
    );
    return ({
        likers: likers
    });  
};

export default connect(msp)(PostNotesIndex);