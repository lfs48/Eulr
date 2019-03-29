import React from 'react';
import Search from './search/search_container';
import NavControls from './nav_controls/nav_controls_container';

const Navbar = (props) => {
        return(
            <div className="nav-container">
                <div className="nav-left">
                    <img className="static" src={window.eulrLogoSmallStatic}></img>
                    <img className="active" src={window.eulrLogoSmallActive}></img>
                    <Search />
                </div>
                {props.loggedIn ?
                <NavControls />
                : <></>
                }
            </div>
        );
};

export default Navbar;