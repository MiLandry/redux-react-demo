import React from "react";

let todoCounter = 1;
const FilterLink = props => (
  <a href='#'
  onClick={e => {
    e.preventDefault();
    props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      visibilityFilter: 'SHOW_ALL'
    })
  }}>All</a>
);

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.onClickCB = this.onClickCB.bind(this);

  }


  onClickCB() {
      this.props.store.dispatch({
        type: 'ADD_TODO',
        id: todoCounter,
        text: this.input.value
      })
      todoCounter ++;
      this.input.value = '';

  };

  onTodoClick (id) {

    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id: id
    })
  }


  render() {
    const store = this.props.store;
    return (
      <div>
        <p> to do list</p>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={this.onClickCB} > Click me </button>
        <ul>
        {this.props.todos.map( todo =>
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
          store={this.props.store}
          />
          {this.props.visibilityFilter}
        </p>
      </div>
    );
  }
}
