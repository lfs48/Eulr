import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Splash from './splash/splash_container';
import LoginForm from './splash/login/login_form_container';
import Explore from './dash/explore/explore_container';

const App = (props) => (
    <div>
        <h1>Welcome to Euler!</h1>
        <Switch>
            <Route path="/explore" component={Explore} />
            <Route path="/login" component={LoginForm} />
            <Route path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;