import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes/routes_util';
import Splash from './splash/splash_container';
import LoginForm from './splash/login/login_form_container';
import Explore from './dash/explore/explore_container';
import Navbar from './nav/nav_container';
import Dash from './dash/dash_container';
import Logout from './session/logout';
import PostCreateForm from './dash/posts/post_creation/post_forms/post_creation_form_container';
import UnderConstruction from  './under_construction/under_construction';

const App = (props) => (
    <main className="app-container">
        <Navbar />
        <Switch>
            <Route path="/explore" component={Explore} />
            <AuthRoute path="/login" component={LoginForm} />
            <ProtectedRoute path="/logout" component={Logout} />
            <ProtectedRoute path="/dashboard" component={Dash} />
            <ProtectedRoute path="/following" component={UnderConstruction} />
            <ProtectedRoute path="/likes" component={UnderConstruction} />
            <ProtectedRoute path="/settings" component={UnderConstruction} />
            <ProtectedRoute path="/help" component={UnderConstruction} />
            <ProtectedRoute path="/new/text" component={PostCreateForm} />
            <AuthRoute path="/" component={Splash} />
        </Switch>
    </main>
);

export default App;