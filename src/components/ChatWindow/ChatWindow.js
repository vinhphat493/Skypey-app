import React from 'react';
import { store } from '../../redux/store';
import _ from 'lodash';

import './ChatWindow.css';

import Header from './Header/Header';
import Chats from './Chats/Chats';
import MessagesInput from '../../containers/MessagesInput/MessagesInput';

const ChatWindow = props => {
    const { activeUserId } = props;
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];
    
    return (
      <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats
          messages={_.values(activeMessages)}
          activeUserId={activeUserId}
        />
        <MessagesInput value={state.typing} />
      </div>
    ); 
}
 
export default ChatWindow;