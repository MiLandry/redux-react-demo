import expect from 'expect';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return state + 1;
    default:
      return state;
  }
}

const testTodos = () => {
  const before = [];

  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'learn'
    
  }

  const after = [
  {
    id: 0,
    text: 'learn',
    completed: false
  }];

  deepFreeze(before);
  deepFreeze(action);

  expect (
    todos(before, action)
    )
    .toEqual(after);
};

testTodos();



//ignore everything belo

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

const store = createStore(counter);

const Counter = ({value, onAdd, onSubtract}) => (
  <div> 
    <h2>{value}</h2>
    <button onClick={onAdd}> add </button>
    <button onClick={onSubtract}> subtract </button>
  </div>
);



const render = () => {
  ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onAdd= {() => {store.dispatch({type: 'INCREMENT'})}}
    onSubtract= {() => {store.dispatch({type: 'DECREMENT<'})}}
  />,
  document.getElementById('root')
    );


};



store.subscribe(render);

render();

// --------test


const testCounter = () => {
  const before = 0;

  const action = {
    type: 'INCREMENT',
  }

  const after = 1;

  deepFreeze(before);
  deepFreeze(action);

  expect (
    counter(before, action)
    )
    .toEqual(after);
};

testCounter();





