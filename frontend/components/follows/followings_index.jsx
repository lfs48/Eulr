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
            this.setState({
                followingList: this.props.followings,
            })
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
        const lis = this.state.followingList.map( (following, idx) => {
            return (<li key={following.id} className={idx % 2 === 0 ? "even-follow-row" : "odd-follow-row"}>
                        <div className="follow-list-left">
                        <img className="avatar-small" src={following.avatar}></img>
                        <span>{following.username}</span>
                        </div>
                        <div>
                        <i className="fas fa-user"></i>
                        {this.props.followingIds.includes(following.id) ?
                        <button className="unfollow-button" onClick={this.handleUnfollow(following.id)}>Unfollow</button>
                        :
                        <button className="follow-button" onClick={this.handleFollow(following.id)}>Follow</button>
                        }
                        </div>
                    </li>)
        });

        return (
            <div className="follow-list-container">
                <section>
                    <h3>Following {`${this.props.followings.length}`} Eulrs</h3>
                    <ul>
                        {lis}
                    </ul>
                </section>
            </div>
        );
    }

}

export default FollowersIndex;