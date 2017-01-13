import React from "react";
import store from '../store';

let todoCounter = 0;
const FilterLink = props => (
  <a href='#'
  onClick={e => {
    e.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      visibilityFilter: props.visibilityFilter
    })
  }}>{props.display}</a>
);



export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.onClickCB = this.onClickCB.bind(this);

  }


  onClickCB() {
      store.dispatch({
        type: 'ADD_TODO',
        id: todoCounter,
        text: this.input.value
      })
      todoCounter ++;
      this.input.value = '';

  };

  onTodoClick (id) {

    store.dispatch({
      type: 'TOGGLE_TODO',
      id: id
    })
  }

  getVisibleTodos (todos, filter) {
    switch (filter) {
      case "SHOW_ALL":
        return todos;,
      case "SHOW_COMPLETED":
        return todos.filter(
          t => t.completed
          )
      case "SHOW_IN_PROGRESS":
        return todos.filter(
            t => !t.completed
          )
    }

  }


  render() {
    const store = this.props.store;
    const todos = this.getVisibleTodos(this.props.todos, this.props.visibilityFilter);
    return (
      <div>
        <p> to do list</p>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={this.onClickCB} > Click me </button>
        <ul>
        {todos.map( todo =>
          <li
            key={todo.id}
            onClick= { () => this.onTodoClick(todo.id) }
            style = { { textDecoration: (todo.completed===true) ? "line-through" : "" }}
        >
        {todo.text}
          </li>
          )}
        </ul>
        <p> Show:
          <FilterLink
          visibilityFilter="SHOW_ALL"
          display="Show All "
          />&nbsp;
          <FilterLink
          visibilityFilter="SHOW_COMPLETED"
          display="Show Completed "
          />&nbsp;
          <FilterLink
          visibilityFilter="SHOW_IN_PROGRESS"
          display="Show in progress "
          />
          {this.props.visibilityFilter}
        </p>
      </div>
    );
  }
}
