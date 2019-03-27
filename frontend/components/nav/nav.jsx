import React from 'react';
import Search from './search/search_container';
import NavControls from './nav_controls/nav_controls_container';

const Navbar = (props) => {
    if (props.loggedIn) {
        return(
            <div className="eulr-nav">
                <Search />
                <h1>Welcome to Euler, esteemed user!</h1>
                <NavControls />
            </div>
        );
    } else {
        return(
            <div className="eulr-nav">
                <Search />
                <h1>Welcome to Euler!</h1>
            </div>
        );
    }
};

export default Navbar;