import React from 'react';
import Search from './search/search_container';
import NavControls from './nav_controls/nav_controls_container';

const Navbar = (props) => {
    if (props.loggedIn) {
        return(
            <div className="nav-container">
                <div className="nav-left">
                    <img className="static" src={window.eulrLogoSmallStatic}></img>
                    <img className="active" src={window.eulrLogoSmallActive}></img>
                    <Search />
                </div>
                <NavControls />
            </div>
        );
    } else {
        return(
            <div className="eulr-nav-container">
                <img src={window.eulrLogoSmall}></img>
                <Search />
            </div>
        );
    }
};

export default Navbar;