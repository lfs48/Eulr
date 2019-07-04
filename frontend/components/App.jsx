import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes/routes_util';
import UnderConstruction from  './under_construction/under_construction';
import Splash from './splash/splash_container';
import LoginForm from './splash/login/login_form_container';
import Explore from './dash/explore/explore_container';
import Navbar from './nav/nav_container';
import Dash from './dash/dash_container';
import Logout from './session/logout';
import FollowersIndex from '../components/follows/followers_index_container';
import FollowingsIndex from '../components/follows/followings_index_container';
import LikesIndex from './likes/likes_index_container';
import Conversation from './conversations/conversation';

const App = (props) => (
    <main className="app-container">
        <Navbar />
        <Switch>
            <Route path="/explore" component={Explore} />
            <AuthRoute path="/login" component={LoginForm} />
            <ProtectedRoute path="/logout" component={Logout} />
            <ProtectedRoute path="/dashboard" component={Dash} />
            <ProtectedRoute path="/following" component={FollowingsIndex} />
            <ProtectedRoute path="/followers" component={FollowersIndex} />
            <ProtectedRoute path="/likes" component={LikesIndex} />
            <ProtectedRoute path="/settings" component={UnderConstruction} />
            <ProtectedRoute path="/help" component={UnderConstruction} />
            <AuthRoute path="/" component={Splash} />
        </Switch>
        <Conversation />
    </main>
);

export default App;