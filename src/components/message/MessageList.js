import React from 'react';
import { Message } from './Message';

import './index.scss';

export const MessageList = (props) => {
  const { messages, handleMessageClick } = props;

  const messageList = messages.map((msg) => {
    return (<Message key={msg.id} {...msg} handleMessageClick={handleMessageClick}></Message>);
  });

  return (
    <ul className="messages-list">
      {messageList}
    </ul>
  )
}