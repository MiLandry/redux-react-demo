import expect from 'expect';
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';
import todoApp from './reducers/todoApp';

const store = createStore(todoApp);

console.log(store.getState());


const render = () => {
  let theCounter = store.getState();
  let addTodo =() => {
    store.dispatch({type: 'ADD_TODO'});
  }

  ReactDOM.render(
    <div>
    <h1>To do</h1>
    <button onClick={addTodo}>add todo</button>

      
    </div>

   ,
  document.getElementById('root')
    );


};


store.subscribe(() => {
  render();
});

render();
