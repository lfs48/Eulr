import { connect } from 'react-redux';
import PostWrapper from './post_wrapper';

const msp = (state, ownProps) => ({
    post: ownProps.post,
    author: state.entities.users[ownProps.post.author_id]
});

export default connect(msp)(PostWrapper);