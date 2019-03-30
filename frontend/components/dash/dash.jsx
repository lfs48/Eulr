import React from 'react';
import PostCreationBar from './posts/post_creation/post_creation_bar_container';
import PostIndex from './posts/post_index/post_index_container';
import TextPostForm from './posts/post_creation/post_forms/text_post_form';
import PhotoPostForm from './posts/post_creation/post_forms/photo_post_form';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class Dash extends React.Component {
    render() {
        return (
            <div>
                <PostCreationBar />
                <PostIndex />
                <Switch>
                    <Route path="/dashboard/new/text" component={TextPostForm} />
                    <Route path="/dashboard/new/photo" component={PhotoPostForm} />
                </Switch>
            </div>
        );
    }
}

export default Dash;