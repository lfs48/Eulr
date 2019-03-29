import React from 'react';

class PostCreationBarItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.openPostCreateForm}>
                <i className={this.props.icon}></i>
                <span>{this.props.label}</span>
            </button>
        );
    }

}

export default PostCreationBarItem;