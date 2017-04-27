const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        completed: false,
        id: action.id,
        text: action.text,
      };
      
      return [...state, todo];
    case 'TOGGLE_TODO' :
      debugger;
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      });

    default:
      return state;
  }
}

export default todos;