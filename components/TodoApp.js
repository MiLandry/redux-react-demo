import React from "react";

let todoCounter = 1;
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

  componentWillReceiveProps() {}



  render() {
    return (
      <div>
        <p> to do list</p>
        <input ref={node => {
          this.input = node;
        }} />
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
