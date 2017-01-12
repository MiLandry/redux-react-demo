import React from "react";

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.onClickCB = this.onClickCB.bind(this);
  }

  onClickCB() {
      this.props.store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: "Bullshit",

      })

  };

  render() {
    return (
      <div>
        <p> to do list</p>
        <button onClick={this.onClickCB} > Click me </button>
        <ul>
        {this.props.todos.map( todo => 
          <li key={todo.id}>
          {todo.text}
          </li>
          )}
        </ul>
      </div>
    );
  }
} 
