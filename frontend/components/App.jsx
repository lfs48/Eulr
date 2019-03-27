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

const App = (props) => (
    <div className="app-container">
        <Navbar />
        <Switch>
            <Route path="/explore" component={Explore} />
            <AuthRoute path="/login" component={LoginForm} />
            <ProtectedRoute path="/dashboard" component={Dash} />
            <AuthRoute path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;