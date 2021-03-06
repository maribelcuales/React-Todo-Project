// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import '../styles.css';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoItems.map(item => (
        <Todo 
          key={item.id} 
          item={item}
          toggleTodo={props.toggleTodo}
        />
      ))}
      <div className="clear-btn-container">
        <button className="clear=btn"
        onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;