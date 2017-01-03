import expect from 'expect';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

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

store.subscribe(render);
render();


document.write("hello webpack mike");



expect(counter(0, { type: 'INCREMENT' } )).toEqual(1);