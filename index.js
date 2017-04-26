import expect from 'expect';
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';

const store = createStore(counter);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT'});


const render = () => {
  let theCounter = store.getState();

  ReactDOM.render(
    <div>
    <h1>{theCounter}</h1>
    <button onClick={() => store.dispatch({ type: 'INCREMENT'})}>+</button>
    <button onClick={() => store.dispatch({ type: 'DECREMENT'})}>-</button>
      
    </div>

   ,
  document.getElementById('root')
    );


};


store.subscribe(() => {
  render();
});

render();
