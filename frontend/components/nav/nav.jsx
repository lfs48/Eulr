import React from 'react';
import Search from './search/search_container';

const Navbar = (props) => {
    return(
        <div className="eulr-nav">
            <Search />
            <h1>Welcome to Euler{props.loggedIn ? `, esteemed user` : '!'}</h1>
        </div>
    );
};

export default Navbar;