import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createMessage} from '../../actions/entities/message_actions';
import { handleInput } from '../../util/forms/post_form_util';

const Conversation = props => {

    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleInput = (event) => {
        event.preventDefault();
        setInput(event.target.value);
        console.log(event.target.scrollHeight);
        event.target.style.height = event.target.scrollHeight + "px";
    }
    
    const {currentUser, users, messages, openConvos} = useSelector(
        state => ({
            currentUser: state.entities.users[state.session.id],
            users: state.entities.users,
            messages: state.entities.messages,
            openConvos: Object.entries(state.ui.conversations)
        })
    );

    const hiddenConvos = openConvos.filter(convo => !convo[1]).map( 
        convo => {
            const avatar = users[convo[0]] ? users[convo[0]].avatar : "";
            return(
                <li key={convo[0]}>
                    <img className="avatar-small" src={avatar}/>
                </li>
            );
        }
    );

    const activeConvo = openConvos.find(convo => convo[1]);

    let activeConvoHeader = <></>;
    let activeMessages = <></>;
    if (activeConvo) {
        activeConvoHeader = 
            <header>
                {currentUser ? currentUser.username : ""} + {users[activeConvo[0]] ? users[activeConvo[0]].username : ""}
            </header>
        activeMessages = messages[activeConvo[0]].map(
            message => {
                const username = users[message.sender_id] ? users[message.sender_id].username : "";
                const avatar = users[message.sender_id] ? users[message.sender_id].avatar : "";
                const side = currentUser && message.sender_id === currentUser.id ? "right-message" : "left-message"
                return(
                    <li key={message.id} className={side}>
                        <img className="avatar-tiny" src={avatar}/>
                        <div className="message-text">
                            <h5>{username}</h5>
                            <p>{message.body}</p>
                        </div>
                    </li>
                )
            }
        );
    }

    if (currentUser) {
        return (
            <div className="conversation-container">
                {activeConvo ?
                <div className="active-conversation-container">
                    {activeConvoHeader}
                    <ul>
                        {activeMessages}
                    </ul>
                    <footer>
                        <textarea 
                            onChange={event => handleInput(event)}
                            value={input}
                            placeholder="Say your thing"
                        >
                        </textarea>
                        <span>
                        <i className="fas fa-location-arrow"></i>
                        </span>
                    </footer>
                </div>
                :<></>}
                <div className="hidden-conversations-container">
                    <ul>
                        {hiddenConvos}
                    </ul>
                </div>
            </div>
        );
    } else {
        return <></>
    }

}

export default Conversation;