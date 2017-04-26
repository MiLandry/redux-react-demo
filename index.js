import expect from 'expect';
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';



const render = () => {
  ReactDOM.render(
    <div>
    <h1>0</h1>
    <button>+</button>
      
    </div>

   ,
  document.getElementById('root')
    );


};





render();



