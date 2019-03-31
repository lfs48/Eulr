import React from 'react';

class FollowersIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUsers().then( () =>
            this.props.fetchFollows(this.props.currentUser.id)
        );
    }
    
    render() {
        const lis = this.props.followers.map( (follower) => {
            return <li key={follower.id}>{follower.username}</li>
        });

        return (
            <div className="follow-list-container">
                <h2>{`${this.props.followers.length}`} people follow you</h2>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }

}

export default FollowersIndex;