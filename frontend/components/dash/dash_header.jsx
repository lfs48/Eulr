import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostCreationBar from './posts/post_creation/post_creation_bar_container';
import {TextPostCreateForm, LinkPostCreateForm} from '../posts/post_forms/text_post_create_form_container';
import TextPostEditForm from '../posts/post_forms/text_post_edit_container';
import MediaPostCreateForm from '../posts/post_forms/media_post_form_container';
import MediaPostEditForm from '../posts/post_forms/media_post_edit_container';

class DashHeader extends React.Component {
    render() {
        return (
            <div className="dash-header-container">
                <img className="avatar" src={this.props.currentUser.avatar}></img>
                <Switch>
                    <Route exact path="/dashboard" component={PostCreationBar} />
                        }
                    />
                    <Route path="/dashboard/new/text"
                        render={() =>
                            <>
                            <TextPostCreateForm
                                postType="text"
                                titlePlaceholder="Title"
                                bodyPlaceholder="Your text here"
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/new/photo"
                        render={() =>
                            <>
                            <MediaPostCreateForm
                                postType="photo"
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/new/quote"
                        render={() =>
                            <>
                            <TextPostCreateForm
                                postType="quote"
                                titlePlaceholder="Quote"
                                bodyPlaceholder="-Source"
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/new/link"
                        render={() =>
                            <>
                            <LinkPostCreateForm
                                postType="link"
                                content={{ url: "", title: "", summary: "", description: "" }}
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/new/chat"
                        render={() =>
                            <>
                            <TextPostCreateForm
                                postType="chat"
                                titlePlaceholder="Title"
                                bodyPlaceholder="Bob: Hello!"
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/new/audio"
                        render={() =>
                            <>
                            <MediaPostCreateForm
                                postType="audio"
                                content={{ url: "", caption: "" }}
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/new/video"
                        render={() =>
                            <>
                            <MediaPostCreateForm
                                postType="video"
                                content={{ url: "", caption: "" }}
                            />
                            <div className="modal-background"></div>
                            </>
                        }
                    />
                    <Route path="/dashboard/edit/text/:postId"
                        render={() =>
                            <TextPostEditForm
                                titlePlaceholder="Title"
                                bodyPlaceholder="Your text here"
                            />
                        }
                    />
                    <Route path="/dashboard/edit/photo/:postId"
                        render={() =>
                            <MediaPostEditForm
                            />
                        }
                    />
                    <Route path="/dashboard/edit/quote/:postId"
                        render={() =>
                            <TextPostEditForm
                                titlePlaceholder="Quote"
                                bodyPlaceholder="-Source"
                            />
                        }
                    />
                    <Route path="/dashboard/edit/chat/:postId"
                        render={() =>
                            <TextPostEditForm
                                titlePlaceholder="Title"
                                bodyPlaceholder="Bob: Hello"
                            />
                        }
                    />
                </Switch>
            </div>
        );
    }
}

export default DashHeader;