import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../../actions/entities/message_actions';

const MessagesIndex = props => {

    const dispatch = useDispatch();

    const [isOpen, switchState] = useState(false);

    const {currentUser, messages} = useSelector(
        state => ({
            currentUser: state.entities.users[state.session.id],
            messages: state.entities.messages
        })
    );

    useEffect( 
        () => {
            dispatch(fetchMessages(currentUser.id));
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