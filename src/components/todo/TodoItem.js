import React from 'react';
import PropTypes from 'prop-types';

import { partial } from '../../lib/utils';
import { Checkbox } from '../checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export const TodoItem = (props) => {
  const { todo, handleToggle, handleRemove } = props;
  const { name, id, isComplete } = props.todo;
 
  return (
    <li className={'todo-row isComplete-' + isComplete}>
      <Checkbox toggleProp={isComplete}
                label={name}
                data={todo}
                id={id}
                handleToggle={handleToggle}>
      </Checkbox>

      <div className="action-bar">
        {/* <button className="btn-alt" ><FontAwesomeIcon icon={faThumbtack} /></button> */}
        <button className="btn-remove" onClick={(e) => handleRemove(e, id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </li>
  )
}