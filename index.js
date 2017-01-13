import expect from 'expect';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze';
import TodoApp from './components/TodoApp'
import store from './store';



const render = () => {
  ReactDOM.render(
    <TodoApp 
      todos={store.getState().todos}
      visibilityFilter={store.getState().visibilityFilter}
    />,
    document.getElementById('root')
    );

};

store.subscribe(render);
render();


