import React from 'react';
import PostCreationBar from './posts/post_creation/post_creation_bar_container';
import PostIndex from './posts/post_index/post_index_container';
import {
    PhotoPostForm,
    LinkPostForm,
    VideoPostForm
} from './posts/post_creation/post_forms/post_creation_form_container';
import { Route, Switch } from 'react-router-dom';
import TextPostCreateForm from '../posts/post_forms/text_post_create_form_container'; 
import TextPostEditForm from '../posts/post_forms/text_post_edit_container';
import DashHeader from './dash_header_container';

class Dash extends React.Component {
    render() {
        return (
            <div className="dash-container">
                <DashHeader />
                <PostIndex />
            </div>
        );
    }
}

export default Dash;