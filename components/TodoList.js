import React from "react";

export default class TodoList extends React.Component {


  render() {
    const { store } = this.context;
    console.log(store);
    console.log(store.getState());
    const toggleTodo = (id) => {
      store.dispatch({
        type: "TOGGLE_TODO",
        id: id
      })
    }

      const getVisibleTodos = (todos, filter) => {
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

        return todos;
      }

    return (
      <div>

      <ul>
       {getVisibleTodos(store.getState().todos, store.getState().visibilityFilter).map( todo =>
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
