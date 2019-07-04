import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../../actions/entities/message_actions';
import { fetchUsers } from '../../../actions/entities/user_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MessagesIndex = props => {

    const dispatch = useDispatch();

    const [isOpen, switchState] = useState(false);

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
        document.removeEventListener("click", handleClose);
    }

    const lis = messages.map( 
        message => {
            const username = users[message.sender_id] ? users[message.sender_id].username : "";
            const url = users[message.sender_id] ? users[message.sender_id].avatar : "";
            return(
            <li key={message.id} className="message-menu-item">
                <img className="avatar-small" src={url} />
                <div>
                    <h5>{username}</h5>
                    <span>{message.body}</span>
                </div>
            </li>
            )
        }
    );

    return(
        <div className="messages-index-container">
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
                <ul>
                    <li className="message-menu-header">
                        <div>
                            <img className="avatar-tiny" src={currentUser.avatar}/>
                            <span>{currentUser.username}</span>
                        </div>
                        <button>New Message</button>
                    </li>
                    {lis}
                </ul>
            </div>
            </ReactCSSTransitionGroup>
            :<></>}
        </div>
        
    )
}

export default MessagesIndex;