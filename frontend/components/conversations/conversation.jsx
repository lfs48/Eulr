import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ConversationOpen = props => {

    const dispatch = useDispatch();

    
    const {currentUser, users, messages} = useSelector(
        state => ({
            currentUser: state.entities.users[state.session.id],
            users: state.entities.users,
            messages: Object.values(state.entities.messages)
        })
    );

}