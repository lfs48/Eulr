import React from 'react';
import { Link } from 'react-router-dom';

class AccountControls extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            open: false
        };
    }

    handleLogout() {
        this.props.logout().then(() => {
            this.props.history.push("/");
        });
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        if (this.state.open) {
            return (
                <div>
                    <button className="account-menu-icon" onClick={this.handleToggle}>
                        <i className="fas fa-user"></i>
                    </button>
                    <div className="account-menu">
                        <header className="account-menu-header">
                            <h5>Account</h5>
                            <button onClick={this.handleLogout}>Log Out</button>
                        </header>
                        <ul>
                            <li>
                                <i className="fas fa-heart"></i>
                                <Link to="/likes">Likes</Link>
                            </li>
                            <li>
                                <i className="fas fa-user-plus"></i>
                                <Link to="/following">Following</Link>
                            </li>
                            <li>
                                <i className="fas fa-cog"></i>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <i className="fas fa-question-circle"></i>
                                <Link to="help">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <button className="account-menu-icon" onClick={this.handleToggle}>
                    <i className="fas fa-user"></i>
                </button>
            );
        }
    }
}

export default AccountControls;