import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { fetchUser } from "../../../../../actions/entities/user_actions";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    post: ownProps.post,
    author: state.entities.users[ownProps.post.author_id],
    tags: Object.values(state.entities.tags)
        .filter( (tag) =>
            ownProps.post.tags.includes(tag.id)
        )
        .map( (tag) =>
        tag.tag
    )
});

const mdp = (dispatch) => ({
    fetchUser: (id) => dispatch( fetchUser(id) )
});

export default withRouter(connect(msp, mdp)(PostIndexItem));