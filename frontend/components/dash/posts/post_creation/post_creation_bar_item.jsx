import React from 'react';

class PostCreationBarItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        this.props.history.push(`/new/${this.props.postType}`);
    }

    render() {
        return (
            <button onClick={this.handleOpen}>
                <i className={this.props.icon}></i>
                <span>{this.props.label}</span>
            </button>
        );
    }

}

export default PostCreationBarItem;