import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../../actions/entities/message_actions';
import { fetchUsers } from '../../../actions/entities/user_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { openConversation } from '../../../actions/ui/conversation_actions';

const MessagesIndex = props => {

    const dispatch = useDispatch();

    const [isOpen, switchState] = useState(false);

    const [stage, setStage] = useState(1);

    const [searchInput, setSearchInput] = useState("");

    const {currentUser, users, messages} = useSelector(
        state => ({
            currentUser: state.entities.users[state.session.id],
            users: state.entities.users,
            messages: Object.values(state.entities.messages)
        })
    );

    useEffect( 
        () => {
            dispatch(fetchMessages(currentUser.id));
        },
        []
    );

    const handleClick = () => {
        switchState(true);
        document.addEventListener("click", handleClose);
    }

    const handleClose = () => {
        switchState(false);
        setStage(1);
        document.removeEventListener("click", handleClose);
    }

    const handleClickConvo = (userId) => {
        dispatch( openConversation(userId) );
        document.removeEventListener("click", handleClose);
        switchState(false);
    }

    const handleSearchInput = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    const lis = Object.values(messages).map(
        conversation => {
            const message = conversation[conversation.length - 1];
            let username = "";
            let url = "";
            let body = "";
            let id = "";
            if (message.receiver_id === currentUser.id) {
                id = message.sender_id;
                body = <span className="message-preview-text">{message.body}</span>
            } else {
                id = message.receiver_id;
                body = 
                    <div className="message-preview-text-container">
                        <h5 className="message-preview-text">{currentUser.username}: </h5>
                        <span className="message-preview-text">{message.body}</span>
                    </div>
            }
            username = users[id] ? users[id].username : "";
            url = users[id] ? users[id].avatar : "";
            return(
            <li key={message.id} className="message-menu-item" onClick={() => {handleClickConvo(id)}}>
                <img className="avatar-small" src={url} />
                <section>
                    <h5>{username}</h5>
                    {body}
                </section>
            </li>
            );
        }
    );

    const searchedUsers = Object.values(users).filter( user => user.username.includes(searchInput))
    let searchResults = <></>;
    if (searchInput.length > 0) {
        searchResults = searchedUsers.slice(0,5).map( user => 
                <li key={user.id} onClick={() => handleClickConvo(user.id)}>
                    <span>{user.username}</span>
                    <img className="avatar-small" src={user.avatar}/>
                </li>
        );
    }

    let content = <></>

    if (stage === 1) {
        content =
            <ul>
                <li className="message-menu-header">
                    <div>
                        <img className="avatar-tiny" src={currentUser.avatar}/>
                        <span>{currentUser.username}</span>
                    </div>
                    <button onClick={() => setStage(2)}>New Message</button>
                </li>
                {lis}
            </ul>
    } else if (stage === 2) {
        content =
        <ul>
            <li className="message-menu-header">
                <div>
                    <img className="avatar-tiny" src={currentUser.avatar}/>
                    <span>{currentUser.username}</span>
                </div>
                <button onClick={() => setStage(1)}>Nevermind</button>
            </li>
            <li className="message-menu-search-field">
                <span>To:</span>
                <input 
                    type="text"
                    onChange={event => handleSearchInput(event)}
                    value={searchInput}
                />
            </li>
            {searchResults}
        </ul>
    }

    return(
            <div className="messages-index-container" onClick={event => event.nativeEvent.stopImmediatePropagation()}>
                <i className="fas fa-comment" onClick={() => handleClick()}></i>
                {isOpen? 
                <ReactCSSTransitionGroup
                transitionName="message-menu-transition"
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={250}
                >
                <div className="message-menu-container" key={1}>
                    {content}
                </div>
                </ReactCSSTransitionGroup>
                :<></>}
            </div>
    );

}

export default MessagesIndex;