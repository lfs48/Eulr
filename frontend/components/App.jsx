import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Splash from './splash/splash_container';

const App = (props) => (
    <div>
        <h1>Welcome to Euler!</h1>
        <Route path="/" component={Splash} />
    </div>
);

export default App;