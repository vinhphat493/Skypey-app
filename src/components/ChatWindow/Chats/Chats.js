import React, { Component } from "react";
import "./Chats.css";

import Chat from "./Chat/Chat";
import { store } from '../../../redux/store';
import { editMessage, deleteMessage } from "../../../redux/actions";

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages.length !== prevProps.messages.length) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  }

  handleMessageClick = (e, currentMessage) => {
    const { isDelete, number } = currentMessage;
    const isIcon = e.target.dataset.icon;
    const message = this.props.messages[number];
    const userId = this.props.activeUserId;
    
    if (!isIcon && !isDelete) {
      store.dispatch(editMessage(message, number));
    } else {
      store.dispatch(deleteMessage(message, userId, number));
    }
  };

  render() {
    const { messages } = this.props;
    return (
      <div className="Chats" ref={this.chatsRef}>
        {messages.map(message => {
          return (
            <Chat
              message={message}
              key={message.number}
              clicked={e => this.handleMessageClick(e, message)}
            />
          );
        })}
      </div>
    );
  }
}

export default Chats;
