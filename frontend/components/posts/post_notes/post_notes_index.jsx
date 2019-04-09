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
                <div className="avatar-icon-wrapper">
                    <img className="avatar-tiny" src={liker.avatar}></img>
                    <i className="fas fa-heart"></i>
                </div>
                <span>{liker.username}</span>
            </li>
        )
            return(
                <div className="post-notes-container">
                    <button onClick={this.handleOpen}>{this.props.likers.length}</button>
                    {this.state.open ?
                    <ul>
                        {lis}
                    </ul>
                    :<></>}
                </div>
            );
    }
}

export default PostNotesIndex;