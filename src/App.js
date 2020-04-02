import React, { Component } from 'react';
import './App.scss';

import { TodoForm, TodoList } from './components/todo';
import { addTodo, generateId } from './lib/TodoHelpers';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'React Todo List', isComplete: false },
      { id: 2, name: 'React & Redux', isComplete: false },
      { id: 3, name: 'React & Next.js', isComplete: false }
    ],
    currentTodo: ''
  }

  handleInputChange = (e) => {
    this.setState({currentTodo: e.target.value});
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
      errorMessage: 'Please provide a todo name'
    })
  }

  render() {
    const { todos, currentTodo, errorMessage } = this.state;

    const submitHandler = currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="app">
        <header className="app-header">
          <h1>React Todos</h1>
        </header>
        <div className="app-content">
          <TodoForm handleInputChange={this.handleInputChange}
                    handleSubmit={submitHandler}
                    currentTodo={currentTodo}>
          </TodoForm>
          {errorMessage && <span className="error">{errorMessage}</span>}
          <TodoList todos={todos}></TodoList>
        </div>
      </div>
    );
  }

}

export default App;
