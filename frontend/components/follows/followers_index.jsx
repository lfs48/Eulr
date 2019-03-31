import React from 'react';

class FollowersIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers().then( () =>
            this.props.fetchFollows(this.props.currentUser.id)
        );
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
        const lis = this.props.followers.map( (follower) => {
            return (<li key={follower.id}>
                        <span>{follower.username}</span>
                        {this.props.followingIds.includes(follower.id) ?
                        <></>
                        :
                        <button onClick={this.handleFollow(follower.id)}>Follow</button>
                        }
                    </li>)
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