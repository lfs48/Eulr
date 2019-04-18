import React from 'react';
import { Link } from 'react-router-dom';

class DashSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    handleFollow(followeeId) {
        return () => {
            const follow = {
                follower_id: this.props.currentUser.id,
                followee_id: followeeId
            }
            this.props.createFollow(follow);
        }
    }

    render() {
        const lis = this.state.users.map( (user) => {
            return(
                <li key={user.id}>
                    <div>
                    <img className="avatar-small" src={user.avatar}></img>
                    <span>{user.username}</span>
                    </div>
                    <button onClick={this.handleFollow(user.id)}>
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
                    <span>Explore all of Eulr</span>
                </Link>
            </div>
        );
    }
}

export default DashSidebar;