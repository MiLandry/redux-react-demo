import expect from 'expect';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze';
import * as reducers from './reducers/reducers';
import TodoApp from './components/TodoApp'
import { createStore } from 'redux';

const store = createStore(reducers.appReducer);

const render = () => {
  ReactDOM.render(
    <TodoApp store={store} todos={store.getState().todos} visibilityFilter={store.getState().visibilityFilter}/>,
    document.getElementById('root')
    );

};

store.subscribe(render);
render();


reducers.tests();
console.log("all tests pass")