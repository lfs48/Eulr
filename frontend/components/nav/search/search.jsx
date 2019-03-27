import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            search: ""
        };
    }

    handleInput(event) {
        this.setState({
            search: event.target.value
        });
    }
    render() {
        return(
            <input
                type="text"
                placeholder="Search Tumblr"
                value={this.state.search}
                onChange={this.handleInput}
            ></input>
        );
    }
}

export default Search;