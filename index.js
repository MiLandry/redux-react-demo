import expect from 'expect';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import deepFreeze from 'deep-freeze';
import * as reducers from './reducers/reducers';
import TodoApp from './components/TodoApp'




const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('root')
    );

};



const store = createStore(reducers.appReducer)


store.subscribe(render);
render();

store.dispatch({
  type: 'ADD_TODO',
  text: 'saonteih',
  id: 0
})


reducers.tests();
console.log("all tests pass")