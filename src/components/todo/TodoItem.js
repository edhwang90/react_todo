import React from 'react';
import PropTypes from 'prop-types';

import { partial } from '../../lib/utils';
import { Checkbox } from '../checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export const TodoItem = (props) => {
  const { name, id, isComplete, handleToggle, handleRemove } = props;
 
  return (
    <li className={'todo-row isComplete-' + isComplete}>
      <Checkbox toggleProp={isComplete}
                label={name}
                data={id}
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

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}