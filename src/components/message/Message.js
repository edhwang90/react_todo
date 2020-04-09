import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Message = (props) => {
  const { id, text, isError, handleMessageClick } = props;

  return (
    <li className={ isError ? 'toastr error' : 'toastr success'}>
      <span>{text}</span>
      <button onClick={() => { handleMessageClick(id) }}><FontAwesomeIcon icon={faTimes} /></button>
    </li>
  )
}