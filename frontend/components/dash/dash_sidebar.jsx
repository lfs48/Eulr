import React from 'react';
import { Link } from 'react-router-dom';

class DashSidebar extends React.Component {

    render() {
        const lis = this.props.users.map( (user) => {
            return(
                <li key={user.id}>
                    <div>
                    <img className="avatar-small" src={user.avatar}></img>
                    <span>{user.username}</span>
                    </div>
                    <button>
                        <i className="fas fa-plus"></i>
                    </button>
                </li>
            );
        });
        return (
            <div className="dash-sidebar-container">
                <h3>Recommended Blogs</h3>
                <ul>
                    {lis}
                </ul>
                <Link to="/explore" >
                    <span>Explore all of Tumblr</span>
                </Link>
            </div>
        );
    }
}

export default DashSidebar;