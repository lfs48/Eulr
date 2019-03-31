import React from 'react';

class PostCreationBarItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        this.props.openPostForm();
        this.props.history.push(`/dashboard/new/${this.props.postType}`);
    }

    render() {
        return (
            <button onClick={this.handleOpen}>
                <i className={`${this.props.icon} ${this.props.label}-icon`}></i>
                <span>{this.props.label}</span>
            </button>
        );
    }

}

export default PostCreationBarItem;