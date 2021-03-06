import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createMessage} from '../../actions/entities/message_actions';
import { handleInput } from '../../util/forms/post_form_util';

const Conversation = props => {

    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const [lastMessage, setLastMessage] = useState();

    const handleInput = (event) => {
        event.preventDefault();
        setInput(event.target.value);
        event.target.style.height = event.target.scrollHeight + "px";
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = {
            sender_id: currentUser.id,
            receiver_id: activeConvo[0],
            body: input
        }
        dispatch(createMessage(message, currentUser.id));
        setInput("");
    }

    useEffect(
        () => { if (lastMessage) lastMessage.scrollIntoView({ behavior: 'smooth' }) }
    );
    
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
    let activeMessagesTopLi = <></>;
    if (activeConvo) {
        activeConvoHeader = 
            <header>
                {currentUser ? currentUser.username : ""} + {users[activeConvo[0]] ? users[activeConvo[0]].username : ""}
            </header>
        activeMessagesTopLi = 
            <li className="active-messages-first-li">
                <img className="avatar-small" src={users[activeConvo[0]] ? users[activeConvo[0]].avatar : ""}/>
                <h5>{users[activeConvo[0]] ? users[activeConvo[0]].username : ""}</h5>
            </li>
        if (activeConvo[0] in messages) {
            activeMessages = messages[activeConvo[0]].map(
                message => {
                    const username = users[message.sender_id] ? users[message.sender_id].username : "";
                    const avatar = users[message.sender_id] ? users[message.sender_id].avatar : "";
                    const side = currentUser && message.sender_id === currentUser.id ? "right-message" : "left-message"
                    return(
                        <li key={message.id}>
                            <img className="avatar-chat" src={avatar}/>
                            <div className="message-text">
                                <h5>{username}</h5>
                                <p>{message.body}</p>
                            </div>
                        </li>
                    )
                }
            );
        }
    }

    if (currentUser) {
        return (
            <div className="conversation-container">
                {activeConvo ?
                <div className="active-conversation-container">
                    {activeConvoHeader}
                    <ul>
                        {activeMessagesTopLi}
                        {activeMessages}
                        <div ref={el => setLastMessage(el)} />
                    </ul>
                    <footer>
                        <textarea 
                            onChange={event => handleInput(event)}
                            value={input}
                            placeholder="Say your thing"
                        >
                        </textarea>
                        <span>
                        <i className="fas fa-location-arrow" onClick={(event) => handleSubmit(event)}></i>
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