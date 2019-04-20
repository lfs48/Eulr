import React from 'react';
import PostIndex from './posts/post_index/post_index_container';
import DashHeader from './dash_header_container';
import DashSidebar from './dash_sidebar_container';

class Dash extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            loaded: false
        };
    }

    componentDidMount() {
        this.props.navToggleClear();
        this.props.fetchUsers()
        .then( () => this.setState({
            loaded: true
            }) 
        );
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="dash-container">
                    <section className="dash-center-column">
                        <DashHeader />
                        <PostIndex />
                    </section>
                    <section className="dash-right-column">
                        <DashSidebar />
                    </section>
                </div>
            );
        } else {
            return <></>
        }
    }
}

export default Dash;