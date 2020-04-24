import React, { Component } from 'react';
import './App.scss';

import { TodoList } from './components/todo';
import { Header } from './components/header';
import { TodoForm } from './components/todo-form';
import { MessageList } from './components/message';
import { RouterContext } from './components/router';
import { addTodo, generateId, findById, updateTodos, toggleTodo, removeTodo, filterTodos } from './lib/TodoHelpers';
import { pipe, partial } from './lib/utils';

import { readTodos, createTodo, updateTodo, deleteTodo } from './lib/TodoService';

class App extends Component {
  static contextType = RouterContext;

  state = {
    todos: [],
    currentTodo: '',
    messages: []
  }

  componentDidMount = () => {
    readTodos()
      .then(todos => this.setState({ todos }))
      .catch(err => this.showTempMessage(`${err}`, true));
  }

  showTempMessage = (msg, isError) => {
    const { state: { messages }, hideTempMessage } = this;
    const timer = isError ? 5000 : 2500;
    const msgId = generateId();
    const newMsg = { id: msgId, text: msg, isError: isError };
    this.setState({ messages: [newMsg, ...messages] });

    setTimeout(() => {
      hideTempMessage(msgId);
    }, timer);
  }

  hideTempMessage = (id) => {
    const { messages } = this.state;
    
    this.setState({ 
      messages: messages.filter((msg) => msg.id !== id)
    });
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
    const toToggle = getToggledTodo(todos, id);
 
    updateTodo(toToggle)
      .then((res) => {
        this.showTempMessage('Success!', false);

        this.setState({ 
          todos: updateTodos(todos, res) 
        });
      })
      .catch(err => this.showTempMessage(`${err}`, true));
  }

  handleRemove = (e, id) => {
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
    const { state: { todos, currentTodo, messages }, context: { route }, 
            handleEmptySubmit, handleSubmit, handleRemove, handleToggle,
            handleInputChange, hideTempMessage } = this;

    const displayTodos = filterTodos(todos, route);
    const submitHandler = currentTodo ? handleSubmit : handleEmptySubmit;

    return (
      <div className="app">
        <MessageList messages={messages} handleMessageClick={hideTempMessage}></MessageList>
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
        </div>
      </div>
    );
  }

}

export default App;
