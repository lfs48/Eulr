import React from 'react';
import PostIndex from './posts/post_index/post_index_container';
import DashHeader from './dash_header_container';

class Dash extends React.Component {
    componentDidMount() {
        this.props.navToggleClear();
    }

    render() {
        return (
            <div className="dash-container">
                <DashHeader />
                <PostIndex />
            </div>
        );
    }
}

export default Dash;