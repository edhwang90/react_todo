import React, { Component } from 'react';
import './App.scss';

import { TodoForm, TodoList, Header } from './components/todo';
import { RouterContext } from './components/router';
import { addTodo, generateId, findById, toggleTodo, updateTodos, removeTodo, filterTodos } from './lib/TodoHelpers';
import { pipe, partial } from './lib/utils';

import { readTodos, createTodo, updateTodo, deleteTodo } from './lib/TodoService';

class App extends Component {
  static contextType = RouterContext;

  state = {
    todos: [],
    currentTodo: ''
  }

  componentDidMount = () => {
    readTodos()
      .then(todos => this.setState({ todos }))
      .catch(err => this.showTempMessage(`${err}`, true));
  }

  showTempMessage = (msg, isError) => {
    const timer = isError ? 5000 : 2500;
    this.setState({ message: msg, isError: isError });

    setTimeout(() => {
      this.setState({ message: '' })
    }, timer);
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

    createTodo(newTodo)
      .then(() => {
        this.showTempMessage('Success!', false);

        this.setState({
          todos: updatedTodos,
          currentTodo: '',
        });
      })
      .catch(err => this.showTempMessage(`${err}`, true));
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.showTempMessage('Error! Please provide a Todo.', true);
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const getToggledTodo = pipe(findById, toggleTodo);
    const updatedTodo = getToggledTodo(todos, id);
    
    const getUpdatedTodos = partial(updateTodos, todos);
    const updatedTodos = getUpdatedTodos(updatedTodo);

    updateTodo(updatedTodo)
      .then(() => {
        this.showTempMessage('Success!', false);

        this.setState({ 
          todos: updatedTodos 
        });
      })
      .catch(err => this.showTempMessage(`${err}`, true));
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const { todos } = this.state;
    const updatedTodos = removeTodo(todos, id);

    deleteTodo(id)
      .then(() => {
        this.showTempMessage('Success!', false);
        this.setState({ todos: updatedTodos });
      })
      .catch(err => this.showTempMessage(`${err}`, true));
  }

  render() {
    const { state: { todos, currentTodo, message, isError }, context: { route }, 
            handleEmptySubmit, handleSubmit, handleRemove, handleToggle,
            handleInputChange } = this;

    const displayTodos = filterTodos(todos, route);
    const submitHandler = currentTodo ? handleSubmit : handleEmptySubmit;

    return (
      <div className="app">
        <Header></Header>
        <div className="app-content">
          <h1>To-Do List</h1>
          <TodoList todos={displayTodos}
                    handleRemove={handleRemove}
                    handleToggle={handleToggle}>
          </TodoList>
          <TodoForm handleInputChange={handleInputChange}
                    handleSubmit={submitHandler}
                    currentTodo={currentTodo}>
          </TodoForm>
          {message && <span className={ !isError ? 'success' : 'error'}>{message}</span>}
          {/* {errorMessage && <span className="error">{errorMessage}</span>} */}
        </div>
      </div>
    );
  }

}

export default App;
