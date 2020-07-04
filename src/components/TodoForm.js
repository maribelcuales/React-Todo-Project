import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }; 

  render() {
    return (
      <form>
        <input 
          type="text"
          name="todoItem"
          value={this.state.todoItem}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;