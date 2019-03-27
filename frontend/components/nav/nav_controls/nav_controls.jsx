import React from 'react';
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
                        <AccountControlsIndex />
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavControls;