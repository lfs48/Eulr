import { connect } from "react-redux";
import { updatePost } from '../../../actions/entities/post_actions';
import { withRouter } from 'react-router-dom';
import MediaPostForm from './media_post_form';
import { closeEditForm} from '../../../actions/ui/post_index_actions';
import { fetchTags } from '../../../actions/entities/tag_actions';

const msp = (state, ownProps) => {
    const post = ownProps.post;
    const tags = Object.values(state.entities.tags).filter((tag) =>
        post.tags.includes(tag.id)
    ).map((tag) =>
        tag.tag
    );
    return {
        post: post,
        content: JSON.parse(post.content),
        author: state.entities.users[post.author_id],
        media: {
            files: null,
            urls: post.mediaUrls
        },
        urls: JSON.parse(post.content).urls,
        stage: 4,
        tags: tags
    };
};

const mdp = (dispatch) => ({
    formAction: (post) => dispatch(updatePost(post)),
    formCancel: () => dispatch(closeEditForm()),
    fetchTags: () => dispatch(fetchTags())
});

export default withRouter(connect(msp, mdp)(MediaPostForm));