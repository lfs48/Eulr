import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            search: "",
            active: false
        };
    }

    handleInput(event) {
        this.setState({
            search: event.target.value
        });
    }

    handleClick(event) {
        event.currentTarget.className = "search-container-clicked";
        this.setState({ active: true }, () => document.addEventListener("click", this.handleClose));
    }

    handleClose(event) {
        this.setState({active: false}, () => document.removeEventListener("click", this.handleClose));
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
                {this.state.search.length > 0 && this.state.active ?
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