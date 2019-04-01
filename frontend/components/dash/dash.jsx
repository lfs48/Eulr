import React from 'react';
import PostCreationBar from './posts/post_creation/post_creation_bar_container';
import PostIndex from './posts/post_index/post_index_container';
import {
    TextPostForm,
    PhotoPostForm,
    QuotePostForm,
    LinkPostForm,
    VideoPostForm
} from './posts/post_creation/post_forms/post_creation_form_container';
import { Route, Switch } from 'react-router-dom';
import { EditTextPostForm } from '../dash/posts/post_creation/post_forms/post_edit_form_container'; 

class Dash extends React.Component {
    render() {
        return (
            <div className="dash-container">
                <section className="post-bar-section">
                <img className="avatar" src={this.props.currentUser.avatar}></img>
                {this.props.postFormOpen ? <></> :
                <PostCreationBar />
                }
                </section>
                <Switch>
                    <Route path="/dashboard/new/text" 
                        render={() => 
                            <TextPostForm
                            postType="text" 
                            content={ {title: "", body: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/new/photo" 
                        render={() => 
                            <PhotoPostForm
                            postType="photo" 
                            content={ {url: "", caption: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/new/quote" 
                        render={() => 
                            <QuotePostForm
                            postType="quote" 
                            content={ {quote: "", source: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/new/link" 
                        render={() => 
                            <LinkPostForm
                            postType="link" 
                            content={ {url: "", title: "", summary: "", description: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/new/chat" 
                        render={() => 
                            <TextPostForm
                            postType="chat" 
                            content={ {title: "", body: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/new/audio" 
                        render={() => 
                            <VideoPostForm
                            postType="audio" 
                            content={ {url: "", caption: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/new/video" 
                        render={() => 
                            <VideoPostForm
                            postType="video" 
                            content={ {url: "", caption: ""} }
                            />
                        } 
                    />
                    <Route path="/dashboard/edit/text/:postId"
                    component={EditTextPostForm}
                    />
                </Switch>
            </div>
        );
    }
}

export default Dash;