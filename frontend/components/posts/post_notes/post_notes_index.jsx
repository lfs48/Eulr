import React from 'react';

class PostNotesIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            open: false
        }
    }

    handleOpen(event) {
        event.preventDefault();
        this.setState({
            open: true
        },
        () => document.addEventListener("click", this.handleClose)
        );
    }

    handleClose(event) {
        event.preventDefault();
        this.setState({
            open: false
        },
        () => document.removeEventListener("click", this.handleClose)
        );
    }

    render() {
        const lis = this.props.likers.map( (liker, idx) => 
            <li key={idx}>
                <img className="avatar-tiny" src={liker.avatar_url}></img>
                <span>{liker.username}</span>
            </li>
        )
        if (this.state.open) {
            return(
                <ul>
                    {lis}
                </ul>
            );
        } else {
            return(
                <button onClick={this.handleOpen}>{this.props.likers.length}</button>
            );
        }
    }
}

export default PostNotesIndex;