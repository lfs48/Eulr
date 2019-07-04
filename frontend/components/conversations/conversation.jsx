import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Conversation = props => {

    const dispatch = useDispatch();

    
    const {currentUser, users, messages, openConvos} = useSelector(
        state => ({
            currentUser: state.entities.users[state.session.id],
            users: state.entities.users,
            messages: Object.values(state.entities.messages),
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

    if (currentUser) {
        return (
            <div className="conversation-container">
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