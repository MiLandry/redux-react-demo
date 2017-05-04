import expect from 'expect';
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';
import todoApp from './reducers/todoApp';

import App from './components/App';
import Provider from './components/Provider';

const store = createStore(todoApp);

console.log(store.getState());

let todoId = 0;


const render = () => {


  ReactDOM.render(
    <div>
    <Provider store={store}>
      <App />
      </Provider>
    </div>

   ,
  document.getElementById('root')
    );


};


store.subscribe(render);

render();
