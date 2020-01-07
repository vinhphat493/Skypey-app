import React from 'react';

import './Chat.css';

const Chat = props => {
    const { message, clicked } = props;
    let renderMessages = (
      <span
        className='Chat' 
      >
        {message.text}
      </span>
    );
    if (message.is_user_msg) {
      renderMessages = (
        <span className={`Chat is_user_msg ${message.isEdit ? 'is_user_edit' : ''} ${message.isDelete ? 'is_user_delete' : ''}`} onClick={clicked} disabled={message.isDelete}>
          <span className="Chat__icon__close" data-icon={true}>
            &#215;
          </span>
          {message.text}
          <span className="Chat__inner_text"> (edited)</span>
        </span>
      );  
    }
    return renderMessages;
}
 
export default Chat;