import React from "react";

export default class TodoList extends React.Component {
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

      <ul>
       {this.props.todos.map( todo =>
        <li
          key={todo.id}
          onClick={() => console.log('click todo ' + todo.id)}
        >
          {todo.text}
          </li>
          )}
      </ul>


      </div>
    );
  }
} 
