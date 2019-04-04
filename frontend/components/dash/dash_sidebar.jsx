import React from 'react';

class DashSidebar extends React.Component {

    render() {
        const lis = this.props.users.map( (user) => {
            return(
                <li key={user.id}>
                    <img src={user.avatar}></img>
                    <span>{user.username}</span>
                    <button>Follow</button>
                </li>
            );
        });
        return (
            <div className="dash-sidebar-container">
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}

export default DashSidebar;