import React from "react";

export default class TodoList extends React.Component {

  getVisibleTodos() {
    return this.props.todos;
  }

  render() {
    const { store } = this.context;
    const toggleTodo = (id) => {
      store.dispatch({
        type: "TOGGLE_TODO",
        id: id
      })
    }
    return (
      <div>

      <ul>
       {this.props.todos.map( todo =>
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration:
              todo.completed ?
               'line-through':
               'none'
          }}
        >
          {todo.text}
          </li>
          )}
      </ul>


      </div>
    );
  }
} 

TodoList.contextTypes = {
  store: React.PropTypes.object
}
