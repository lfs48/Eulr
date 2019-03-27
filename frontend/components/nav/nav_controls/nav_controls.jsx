import React from 'react';

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
                <h5>Account</h5>
                <button onClick={this.handleLogout}>Log Out</button>
            <ul>
            </ul>
            </div>
        );
    }
}

export default NavControls;