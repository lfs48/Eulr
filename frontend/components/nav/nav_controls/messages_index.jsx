import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../../actions/entities/message_actions';
import { fetchUsers } from '../../../actions/entities/user_actions';

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
            <i className="fas fa-comment" onClick={() => switchState(!isOpen)}></i>
            {isOpen? 
            <div className="message-menu-container">
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
            :<></>}
        </div>
        
    )
}

export default MessagesIndex;