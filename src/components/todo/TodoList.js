import React from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

export const TodoList = (props) => {
  const { todos } = props;

  let todosList = todos.map(todo => {
    return (
      <TodoItem key={todo.id} {...todo}></TodoItem>
    )
  });
  return (
    <div>
      <ul className="todo-list">
        { todosList }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}