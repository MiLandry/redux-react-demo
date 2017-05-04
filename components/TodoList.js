import React from "react";

export default class TodoList extends React.Component {


  render() {
    const { store } = this.context;
    const toggleTodo = (id) => {
      store.dispatch({
        type: "TOGGLE_TODO",
        id: id
      })
    }

      const getVisibleTodos = (todos, filter) => {
        console.log("filter " + filter);
        switch (filter) {
          case "SHOW_ALL":
            return todos;
          case "SHOW_COMPLETED":
            return todos.filter(
              t => t.completed
              );
          case "SHOW_IN_PROGRESS":
            return todos.filter(
              t => !t.completed
              );
        }

        return this.props.todos;
      }

    return (
      <div>

      <ul>
       {getVisibleTodos(this.props.todos, this.props.filter).map( todo =>
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
