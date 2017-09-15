import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
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
        <AddTodo
          onAddClick={ text => {
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text
            })
          }}
        />
        <h1>My Todo List</h1>
        <FilterLinks />
        <TodoList />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}