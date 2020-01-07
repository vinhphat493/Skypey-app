import React from 'react';
import './Main.css';

import Empty from '../Empty/Empty';
import ChatWindow from '../ChatWindow/ChatWindow';

const Main = props => {
  return (
    <div className="Main">
      {!props.activeUserId ? <Empty user={props.user} /> : <ChatWindow activeUserId={props.activeUserId}/>}
    </div>
  );
}
 
export default Main;