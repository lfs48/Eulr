import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Transition extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: (<></>)
        }
    }

    componentDidMount() {
        this.setState({
            content: this.props.content
        })
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="auto"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={0}
            >
                <div key={1}>
                    {this.state.content}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Transition;