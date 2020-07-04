import React from "react";
import './Todo.css';

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleTodo(props.item.id)}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <p className="item-todo">{props.item.task}</p>
    </div>
  );
};

export default Todo; 
