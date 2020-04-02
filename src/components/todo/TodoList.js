import React from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

import './todo.scss';

export const TodoList = (props) => {
  const { todos } = props;

  let todosList = todos.map(todo => {
    return (
      <TodoItem key={todo.id} {...todo}></TodoItem>
    )
  });
  return (
    <React.Fragment>
      <ul className="todo-list">
        { todosList }
      </ul>
    </React.Fragment>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}