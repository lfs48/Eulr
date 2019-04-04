import React from 'react';

const DashSidebar = (props) => {
    const lis = props.users.map( (user) => {
        return(
            <li key={user.id}>
                <img src={user.avatar}></img>
                <span>{user.username}</span>
                {props.currentUser.followingIds.includes(user.id) ?
                    <button>Follow</button>
                    :
                    <></>
                }
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

export default DashSidebar;