import React, { Component } from 'react';
import './App.scss';

import { TodoForm, TodoList, Header } from './components/todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/TodoHelpers';
import { pipe, partial } from './lib/utils';

class App extends Component {

  state = {
    todos: [
      { id: 1, name: 'Duis aute irure', isComplete: true },
      { id: 2, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', isComplete: false },
      { id: 3, name: 'Ut enim ad minima veniam, quis nostrum', isComplete: false }
    ],
    currentTodo: ''
  }

  handleInputChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { currentTodo, todos } = this.state;
    const newId = generateId();
    const newTodo = { id: newId, name: currentTodo, isComplete: false }
    const updatedTodos = addTodo(todos, newTodo);

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please provide a task name.'
    })
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, todos));
    const updatedTodos = getUpdatedTodos(todos, id);

    this.setState({ todos: updatedTodos });
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const { todos } = this.state;
    const updatedTodos = removeTodo(todos, id);

    this.setState({ todos: updatedTodos });
  }

  render() {
    const { todos, currentTodo, errorMessage } = this.state;

    const submitHandler = currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="app">
        <Header></Header>
        <div className="app-content">
          <h1>To-Do List</h1>
          <TodoList todos={todos}
                    handleRemove={this.handleRemove}
                    handleToggle={this.handleToggle}>
          </TodoList>
          <TodoForm handleInputChange={this.handleInputChange}
                    handleSubmit={submitHandler}
                    currentTodo={currentTodo}>
          </TodoForm>
          {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
      </div>
    );
  }

}

export default App;
