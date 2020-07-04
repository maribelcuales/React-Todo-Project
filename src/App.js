import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoArray = [
  {
    name: 'Buy groceries',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: todoArray
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Todo List: MVP</h1>
          <TodoForm /> 
        </div>
          <TodoList 
            todoItems={this.state.todoItems}
          />
      </div>
    );
  };
};

export default App;
