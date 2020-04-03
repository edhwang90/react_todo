import React from 'react';
import PropTypes from 'prop-types';

import { partial } from '../../lib/utils';
import { Checkbox } from '../checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TodoItem = (props) => {
  const { id, name, isComplete, handleToggle, handleRemove } = props;

  const handleTodoToggle = partial(handleToggle, id);
  const handleTodoRemove = partial(handleRemove, id);

  return (
    <li className={'todo-row isComplete-' + isComplete}>
      <Checkbox toggleProp={isComplete}
                label={name}
                id={id}
                handleToggle={handleTodoToggle}>
      </Checkbox>

      <div className="action-bar">
        <button className="btn-remove" onClick={handleTodoRemove}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}