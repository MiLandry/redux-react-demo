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
    default:
      return state;
  }
}
/******************************************/

export const testAddTodo = () => {
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

