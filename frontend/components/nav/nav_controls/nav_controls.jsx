import React from 'react';
import { Link } from 'react-router-dom';
import AccountControlsIndex from './account_controls_index_container';

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
            <div>
                <ul>
                    <li>
                        <Link to="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link to="/explore">Radar</Link>
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