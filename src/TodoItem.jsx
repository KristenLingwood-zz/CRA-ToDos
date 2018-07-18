import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { task, completed, dueBy } = this.props;
    return (
      <div className="todo-item">
        <h3 className="task">{task}</h3>
        <h6 className="completed">Completed? {completed} </h6>
        <h5 className="due-by">Due by: {dueBy}</h5>
      </div>
    );
  }
}

export default TodoItem;
