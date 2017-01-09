import deepFreeze from 'deep-freeze'
import expect from 'expect';


export const todosReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return [...state, 
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO' :
      return state.map ( todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        }

      })
    default:
      return state;
  }
}





/******************************************/

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
  testAddTodo;
}


