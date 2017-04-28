import React from "react";
import TodoList from './TodoList';

export default class App extends React.Component {
  addTodo() {
    store.dispatch({
      type: "ADD_TODO",
      text: this.textInput.value(),
      id: todoId
    });
    todoId++;
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <input ref={input => (this.textInput = input)} />
        <button onClick={this.addTodo}>add todo</button>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}
