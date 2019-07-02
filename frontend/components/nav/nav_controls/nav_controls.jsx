import React from 'react';
import { Link } from 'react-router-dom';
import AccountControlsIndex from './account_controls_index_container';
import MessagesIndex from './messages_index';

class NavControls extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout().then( () => {
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div className="nav-controls-container">
                <ul>
                    <li>
                        <Link to="/dashboard">
                            <i className="fas fa-home"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">
                            <i className="far fa-compass"></i>
                        </Link>
                    </li>
                    <li>
                        <MessagesIndex />
                    </li>
                    <li>
                        <AccountControlsIndex />
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavControls;