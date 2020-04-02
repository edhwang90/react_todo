import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  const { id, name, isComplete } = props;
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete} />
      {name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}