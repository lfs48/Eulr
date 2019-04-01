import React from 'react';
import Search from './search/search_container';
import NavControls from './nav_controls/nav_controls_container';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleLogin() {
        this.props.history.push("/login");
    }

    handleRegister() {
        this.props.history.push("/")
    }

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
                    <button className="nav-login" onClick={this.handleLogin}>Log In</button>
                    : <></>
                }
                {this.props.nav === "register" ?
                    <button className="nav-register" onClick={this.handleRegister}>Sign Up</button>
                    : <></>
                }
            </div>
        );
    }
}   

export default Navbar;