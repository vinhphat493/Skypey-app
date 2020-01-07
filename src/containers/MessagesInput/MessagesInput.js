import React, { Component } from "react";
import { store } from "../../redux/store";
import { setTypingValue, sendMessage, sendEditMessage } from "../../redux/actions";
import "./MessagesInput.css";

class MessagesInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.inputRef.current.focus()
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId, editMesNumber } = store.getState();
    if (!editMesNumber) {
      store.dispatch(sendMessage(typing, activeUserId));
    } else {
      store.dispatch(sendEditMessage(typing, activeUserId, editMesNumber));
    }
  };

  handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  render() {
    return (
      <form className="MessagesInput" onSubmit={this.handleSubmit}>
        <input
          className="MessagesInput__input"
          type="text"
          placeholder="Write a message"
          value={this.props.value}
          onChange={this.handleChange}
          ref={this.inputRef}
        />
        <button className="MessagesInput__btn">
          <span className="MessagesInput__btn__image"></span>
        </button>
      </form>
    );
  }
}

export default MessagesInput;
