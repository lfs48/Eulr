import React from 'react';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchExplorePosts()
        .then( () =>
            this.setState({
                loaded: true
            })
        );
    }

    render() {
        if (this.state.loaded) {
            return(
                <span>"h-h-hewwo"</span>
            );
        } else {
            return (<></>);
        }
        
    }
}

export default Explore;