import React from 'react';
import Search from './search/search_container';
import NavControls from './nav_controls/nav_controls_container';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleDash = this.handleDash.bind(this);
    }

    handleLogin() {
        this.props.history.push("/login");
    }

    handleRegister() {
        this.props.history.push("/")
    }

    handleDash() {
        this.props.history.push("/dashboard")
    }

    render() {
        return(
            <div className="nav-container">
                <div className="nav-left">
                {this.props.loggedIn ?
                    <>
                    <img onClick={this.handleDash} className="static" src={window.eulrLogoSmallStatic}></img>
                    <img onClick={this.handleDash} className="active" src={window.eulrLogoSmallActive}></img>
                    </>
                    :<div className="placeholder"></div>
                }
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