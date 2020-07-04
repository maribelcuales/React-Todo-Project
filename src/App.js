import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

const todoArray = [
  {
    task: 'Buy groceries',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
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

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoItems:
      this.state.todoItems.filter(item => !item.completed)
    });
  }; 

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List: MVP</h1>
          <TodoForm addTodo={this.addTodo} /> 
        </div>
          <TodoList 
            todoItems={this.state.todoItems}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  };
};

export default App;
