import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchMessages } from '../../../actions/entities/message_actions';

const MessagesIndex = props => {

    const [isOpen, switchState] = useState(false);

    const {currentUser, messages} = useSelector(
        state => ({
            currentUser: state.entities.users[state.session.id],
            messages: state.entities.messages
        })
    );

    useEffect( 
        () => {
            fetchMessages(currentUser.id)
        }
    );

    const lis = {}

    return(
        <div className="messages-index-container">
            <i className="fas fa-comment" onClick={() => switchState(!isOpen)}></i>
            {isOpen? 
            <div className="message-menu-container">
            </div>
            :<></>}
        </div>
        
    )
}

export default MessagesIndex;