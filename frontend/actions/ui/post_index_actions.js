export const OPEN_EDIT_FORM = "OPEN_EDIT_FORM";
export const CLOSE_EDIT_FORM = "CLOSE_EDIT_FORM";

export const openEditForm = (postId) => ({
    type: OPEN_EDIT_FORM,
    postId: postId
});

export const closeEditForm = () => ({
    type: CLOSE_EDIT_FORM
});