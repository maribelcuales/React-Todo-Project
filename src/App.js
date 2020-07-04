import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

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

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    });
  };

  toggleTodo = itemId => {
    console.log(itemId);
    this.setState({
      todoItems: 
      this.state.todoItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Todo List: MVP</h1>
          <TodoForm addTodo={this.addTodo} /> 
        </div>
          <TodoList 
            todoItems={this.state.todoItems}
            toggleTodo={this.toggleTodo}
          />
      </div>
    );
  };
};

export default App;
