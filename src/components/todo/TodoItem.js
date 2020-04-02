import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  const { id, name, isComplete } = props;
  return (
    <li>
      <input className="checkbox" type="checkbox" defaultChecked={isComplete} id={'checkbox' + id} />
      <label htmlFor={'checkbox' + id}>{name}</label>
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}