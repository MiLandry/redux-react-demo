import React from "react";
import TodoList from "./TodoList";

let todoId = 0;

export default class App extends React.Component {

  render() {
    const { store } = this.context;
    const addTodo = () => {
      console.log('sntaoehi');
      store.dispatch({
        type: "ADD_TODO",
        text: 'test', //this.textInput.value(),
        id: todoId
      });
      todoId++;
    };
    return (
      <div>
        <h1>My Todo List</h1>
        <input ref={input => (this.textInput = input)} />
        <button onClick={addTodo}>add todo</button>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}