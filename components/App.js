import React from "react";
import TodoList from "./TodoList";
import FilterLinks from "../containers/FilterLinks";

let todoId = 0;

export default class App extends React.Component {

  render() {
    const { store } = this.context;
    const addTodo = () => {
      store.dispatch({
        type: "ADD_TODO",
        text: this.textInput.value,
        id: todoId
      });
      console.log("id" + todoId)
      todoId++;
      this.textInput.value = '';
    };
    return (
      <div>
        <h1>My Todo List</h1>
        <input ref={input => (this.textInput = input)} />
        <button onClick={addTodo}>add todo</button>
        <FilterLinks />
        <TodoList
          todos={this.props.todos}
          filter={this.props.filter}/>
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}