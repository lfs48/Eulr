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

    handleClick(event) {
        event.currentTarget.className = "search-container-clicked"
    }

    render() {
        return(
            <div className="search-container" onClick={this.handleClick}>
            <i className="fas fa-search"></i>
            <input className="nav-search"
                type="text"
                placeholder="Search Eulr"
                value={this.state.search}
                onChange={this.handleInput}
            ></input>
            </div>
        );
    }
}

export default Search;