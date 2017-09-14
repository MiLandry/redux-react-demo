import React from "react";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    todos.map( todo => {
      key = {todo.id}
      {...todo}
      onClick ={() => onTodoClick(todo.id)} 
    })
  </ul>
);


export default Todo;


// import React from "react";
// import Todo from './Todo';

// export default class TodoList extends React.Component {


//   render() {
//     const { store } = this.context;
//     const toggleTodo = (id) => {
//       store.dispatch({
//         type: "TOGGLE_TODO",
//         id: id
//       })
//     }

//       const getVisibleTodos = (todos, filter) => {
//         switch (filter) {
//           case "SHOW_ALL":
//             return todos;
//           case "SHOW_COMPLETED":
//             return todos.filter(
//               t => t.completed
//               );
//           case "SHOW_IN_PROGRESS":
//             return todos.filter(
//               t => !t.completed
//               );
//         }

//         return todos;
//       }

//     return (
//       <div>

//       <ul>
//        {getVisibleTodos(store.getState().todos, store.getState().visibilityFilter).map( todo =>
//         <Todo
//           onClick={() =>{ toggleTodo(todo.id)}}
//           completed={todo.completed}
//           text={todo.text}
//           id={todo.id}
//           key={todo.id}
//         />
//         )}
//       </ul>


//       </div>
//     );
//   }
// } 

// TodoList.contextTypes = {
//   store: React.PropTypes.object
// }
