import * as TagsAPIUtil from '../../util/entities/tag_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";

// Standard actions

const receiveAllTags = (tags) => ({
    type: RECEIVE_ALL_TAGS,
    tags: tags
});

// Thunk actions

export const fetchTags = () => (dispatch) => {
    return TagsAPIUtil.fetchTags().then( (tags) =>
        dispatch( receiveAllTags(tags) )
    );
};
