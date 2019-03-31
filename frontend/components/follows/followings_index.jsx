import React from 'react';

class FollowersIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.state = {
            followingList: []
        }
    }

    componentDidMount() {
        this.props.fetchUsers().then( () =>
            this.props.fetchFollows(this.props.currentUser.id).then( () =>
                this.setState({
                    followingList: this.props.followings,
                })
            )
        );
    }

    handleUnfollow(followeeId) {
        return () => {
            const follow = {
                follower_id: this.props.currentUser.id,
                followee_id: followeeId
            }
            this.props.destroyFollow(follow)
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
        const lis = this.state.followingList.map( (following) => {
            return (<li key={following.id}>
                        <span>{following.username}</span>
                        {this.props.followingIds.includes(following.id) ?
                        <button onClick={this.handleUnfollow(following.id)}>Unfollow</button>
                        :
                        <button onClick={this.handleFollow(following.id)}>Follow</button>
                        }
                    </li>)
        });

        return (
            <div className="follow-list-container">
                <h3>Following {`${this.props.followings.length}`} Eulrs</h3>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }

}

export default FollowersIndex;