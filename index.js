import expect from 'expect';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';


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

const Counter = ({value}) => (
  <h2>{value}</h2>
);



const render = () => {
  ReactDOM.render(
  <Counter value = {store.getState()}/>,
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





