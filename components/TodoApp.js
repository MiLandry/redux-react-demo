import React from "react";

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.name = "Mike";
    this.state = {
      clicks: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  render() {
    return (
      <div>
        <p> to do list</p>
        <button onClick={this.increment} > Click me </button>
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
