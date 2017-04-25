import expect from 'expect';
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';



const render = () => {
  ReactDOM.render(
    <h1>hi</h1>

   ,
  document.getElementById('root')
    );


};





render();



