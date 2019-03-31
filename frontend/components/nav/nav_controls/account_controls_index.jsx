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
                                <Link className="account-menu-link" to="/likes">Likes</Link>
                            </li>
                            <li>
                                <i className="fas fa-user-plus"></i>
                                <Link className="account-menu-link" to="/following">Following</Link>
                            </li>
                            <li>
                                <i className="fas fa-cog"></i>
                                <Link className="account-menu-link" to="/settings">Settings</Link>
                            </li>
                            <li>
                                <i className="fas fa-question-circle"></i>
                                <Link className="account-menu-link" to="help">Help</Link>
                            </li>
                        </ul>
                        <header>
                            <h5>Tumblrs</h5>
                            <button>+ New</button>
                        </header>
                            <ul>
                                <li>
                                    <span>Posts</span>
                                </li>
                                <li>
                                <Link className="account-menu-link" to="/followers">Followers</Link>
                                </li>
                                <li>
                                    <span>Activity</span>
                                </li>
                                <li>
                                    <span>Drafts</span>
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