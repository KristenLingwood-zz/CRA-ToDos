import React, { Component } from 'react';
import './App.css';
// import TodoItem from './TodoItem';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Get stuff done! CRA To do list</h1>
        <p className="App-intro">CRA-style React App Todos</p>
        <section className="todo-list">
          <TodoList />
        </section>
      </div>
    );
  }
}

export default App;
