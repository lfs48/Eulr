import React from 'react';
import Search from './search/search_container';
import NavControls from './nav_controls/nav_controls_container';

class Navbar extends React.Component {

    render() {
        return(
            <div className="nav-container">
                <div className="nav-left">
                    <img className="static" src={window.eulrLogoSmallStatic}></img>
                    <img className="active" src={window.eulrLogoSmallActive}></img>
                    <Search />
                </div>
                {this.props.loggedIn ?
                <NavControls />
                : <></>
                }
                {this.props.nav === "login" ?
                    <button onClick={this.handleLogin}>Login</button>
                    : <></>
                }
                {this.props.nav === "register" ?
                    <button onClick={this.handleRegister}>Register</button>
                    : <></>
                }
            </div>
        );
    }
}   

export default Navbar;