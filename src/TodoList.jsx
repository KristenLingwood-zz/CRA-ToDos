import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  static defaultProps = {
    tasks: [
      {
        task: 'Grocery shop',
        completed: false,
        dueBy: '7/20/18'
      },
      {
        task: 'laundry',
        completed: true,
        dueBy: 'Monday'
      },
      {
        task: 'pay bills',
        completed: false,
        dueBy: '8/1/18'
      },
      {
        task: 'get gas',
        completed: true,
        dueBy: '7/10/18'
      }
    ]
  };

  render() {
    const taskList = this.props.tasks.map(taskObj => (
      <TodoItem
        task={taskObj.task}
        completed={taskObj.completed}
        dueBy={taskObj.dueBy}
      />
    ));
    return <div className="task-list">{taskList}</div>;
  }
}

export default TodoList;
