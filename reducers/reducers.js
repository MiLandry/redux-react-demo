import deepFreeze from 'deep-freeze'
import expect from 'expect';

export const appReducer = (state={}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
  }

}

export const todosReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
        return [...state,
        todoReducer(undefined, action)
      ];
    case 'TOGGLE_TODO' :
      return state.map( t => todoReducer(t, action));
    default:
      return state;
  }
}

export const todoReducer = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return {
          id: action.id,
          text: action.text,
          completed: false
        }
    case 'TOGGLE_TODO' :
      if (state.id !== action.id)
      {
        return state;
      }

      return{
        ...state,
        completed : !state.completed
      };
    default:
      return state;
  }
}



const visibilityFilterReducer = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case ('SET_VISIBILITY_FILTER') :
      return action.visibilityFilter;
    default :
      return state;
  }
};



/****************Tests**************************/


const testAddTodo = () => {
  const before = [];

  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'test'
  }

  const after = [
    {
      id: 0,
      text: 'test',
      completed: false
    }
  ];

  deepFreeze(before);
  deepFreeze(action);

  expect (
    todosReducer(before, action)
    )
    .toEqual(after);
};
const testToggleTodo = () => {
  const before = [
    {
      id: 0,
      text: 'test',
      completed: false
    }
    ];

  const action = {
    type: 'TOGGLE_TODO',
    id: 0,
  }

  const after = [
    {
      id: 0,
      text: 'test',
      completed: true
    }
  ];

  deepFreeze(before);
  deepFreeze(action);

  expect (
     todosReducer(before, action)
    )
    .toEqual(after);
};

export const tests = () => {
  testToggleTodo();
  testAddTodo();
}


