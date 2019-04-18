import { connect } from 'react-redux';
import { fetchExplorePosts } from '../../../actions/entities/post_actions';
import Explore from './explore';

const msp = (state) => {
    const comparator = (postA, postB) => {
        if (postA.likers.length > postB.likers.length) {
            return -1;
        } else if (postA.likers.length < postB.likers.length) {
            return 1;
        } else {
            return 0;
        }
    }
    const posts = Object.values(state.entities.posts).sort(comparator).slice(0,2);
    return {
        posts: posts
    }


};    

const mdp = (dispatch) => ({
    fetchExplorePosts: () => dispatch( fetchExplorePosts() )
});

export default connect(msp, mdp)(Explore);