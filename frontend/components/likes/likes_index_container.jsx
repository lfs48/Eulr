import { connect } from 'react-redux';
import LikesIndex from './likes_index';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const posts = Object.values(state.entities.posts)
        .filter( (post) =>
            currentUser.likes.includes(post.id)
         );
    return ({
        currentUser: currentUser,
        posts: posts
    });
}

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(LikesIndex);