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
        const searchedUsers = this.props.users.filter( user => user.username.includes(this.state.search))
        const lis = searchedUsers.map( user => 
            <li key={user.id}>
                <span>{user.username}</span>
                <img className="avatar-small" src={user.avatar}/>
            </li>
        );
        return(
            <div className="search-container" onClick={this.handleClick}>
                <i className="fas fa-search"></i>
                <input className="nav-search"
                    type="text"
                    placeholder="Search Eulr"
                    value={this.state.search}
                    onChange={this.handleInput}
                ></input>
                {this.state.search.length > 0 ?
                    <div className="results-container">
                        <ul>
                            {lis}
                        </ul>
                    </div>
                :<></>}
            </div>
        );
    }
}

export default Search;