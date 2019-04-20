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
            this.props.createFollow(follow)
            .then( () =>
                this.setState({
                    users: this.state.users.filter( (user) => user.id !== followeeId )
                })
            );
        }
    }
    
    handleRemove(id) {
        return () => {
            this.setState({
                users: this.state.users.filter( (user) => user.id !== id)
            });
        }
    }

    render() {
        const lis = this.state.users.slice(0,4).map( (user) => {
            return(
                <div key={user.id}>
                <li>
                    <div>
                    <img className="avatar-small" src={user.avatar}></img>
                    <span>{user.username}</span>
                    </div>
                    <button onClick={this.handleFollow(user.id)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </li>
                <button className="rec-remove-button" onClick={this.handleRemove(user.id)}>
                        <i className="fas fa-times"></i>
                </button>
                </div>
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