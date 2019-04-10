import React from 'react';

class FollowersIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers()
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
        const lis = this.props.followers.map( (follower, idx) => {
            return (<li key={follower.id} className={idx % 2 === 0 ? "even-follow-row" : "odd-follow-row"}>
                        <div className="follow-list-left">
                        <img className="avatar-small" src={follower.avatar}></img>
                        <span>{follower.username}</span>
                        </div>
                        {this.props.followingIds.includes(follower.id) ?
                        <></>
                        :
                        <button className="follow-button" onClick={this.handleFollow(follower.id)}>Follow</button>
                        }
                    </li>)
        });

        return (
            <div className="follow-list-container">
                <section>
                    <h2>{`${this.props.followers.length}`} people follow you</h2>
                    <ul>
                        {lis}
                    </ul>
                </section>
            </div>
        );
    }

}

export default FollowersIndex;