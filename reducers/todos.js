const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        completed: false,
        id: action.id,
        text: action.text,
      };
      
      return [...state, todo];
    // case 'TOGGLE_TODO' :
    //   let todo = {};


    //   return [...state,
    //   todo];
    default:
      return state;
  }
}

export default todos;