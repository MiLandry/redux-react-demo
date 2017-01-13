import expect from 'expect';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze';
import TodoApp from './components/TodoApp'
import store from './store';



const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}
    />,
    document.getElementById('root')
    );

};

store.subscribe(render);
render();


