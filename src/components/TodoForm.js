import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: ""
    };
  }

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