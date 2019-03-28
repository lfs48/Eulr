import React from 'react';

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
                    <button onClick={this.handleToggle}>
                        <i className="fas fa-user"></i>
                    </button>
                    <div className="account-menu">
                        <h5>Account</h5>
                        <button onClick={this.handleLogout}>Log Out</button>
                        <ul>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <button onClick={this.handleToggle}>
                    <i className="fas fa-user"></i>
                </button>
            );
        }
    }
}

export default AccountControls;