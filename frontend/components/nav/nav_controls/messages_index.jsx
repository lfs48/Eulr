import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../../actions/entities/message_actions';
import { fetchUsers } from '../../../actions/entities/user_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { openConversation } from '../../../actions/ui/conversation_actions';

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

    const handleClickConvo = (userId) => {
        dispatch( openConversation(userId) );
        document.removeEventListener("click", handleClose);
        switchState(false);
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