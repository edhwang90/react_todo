import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => {
  const { handleInputChange, handleSubmit, currentTodo } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
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