import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const TodoForm = (props) => {
  const { handleInputChange, handleSubmit, currentTodo } = props;
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <button><FontAwesomeIcon icon={faPlus} /></button>
      <input type="text" 
        placeholder="Add a task"
        onChange={handleInputChange} 
        value={currentTodo}>
      </input>
    </form>
  )
}

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}