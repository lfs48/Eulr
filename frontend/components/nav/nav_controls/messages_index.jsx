import React, {useState} from 'react';

function MessagesIndex() {

    const [isOpen, switchState] = useState(false);

    return(
        <div className="messages-index-container">
            <i className="fas fa-comment" onClick={() => switchState(!isOpen)}></i>
            {isOpen? 
            <div className="message-menu-container"></div>
            :<></>}
        </div>
        
    )
}

export default MessagesIndex;