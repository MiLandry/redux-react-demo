import expect from 'expect';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
    return state + 1;
    case 'DECREMENT': return state -1;
    default:
    return state;
  }
}

const store = createStore(counter);


const Counter = ({
  value,
  onIncrement,
  onDecrement}) => (
      <div>
        <h1>{value}</h1>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    );



const render = () => {
  ReactDOM.render(
    <Counter
      value = {store.getState()}
      onDecrement={() => {store.dispatch({ type: 'DECREMENT'})}}
      onIncrement={() => {store.dispatch({ type: 'INCREMENT'})}}
     />,
    document.getElementById('root')
    );

};

const addCounter = (list) => {

  return [...list, 0];

};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];

}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
}

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  })

}

const todosReducer = (state=[], action) => {
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

testAddTodo();

const toggleTodoTest = () => {
  const before = {
    id: 0,
    text: 'test',
    completed: false 
  };
  const after = {
    id: 0,
    text: 'test',
    completed: true 
  };
  expect (
    toggleTodo(before)
    )
    .toEqual(after);
}

toggleTodoTest();

const testIncrementCounter = () => {
  const before = [0,10,20];
  const after =  [0,11,20];

  deepFreeze(before);

  expect(
    incrementCounter(before, 1)
    )
    .toEqual(after);
}

const removeCounterTest = () => {
  const before = [0,10,20];
  const after =  [0,20];

  deepFreeze(before);

  expect(
    removeCounter(before, 1)
    )
    .toEqual(after);

}

const addCounterTest = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
    )
    .toEqual(listAfter);

}


store.subscribe(render);
render();


document.write("hello webpack mike");



expect(counter(0, { type: 'INCREMENT' } )).toEqual(1);

addCounterTest();
removeCounterTest();
testIncrementCounter();