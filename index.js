import expect from 'expect';
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';


const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER' :
      return action.filter;

    default:
      return state;
  } 

}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }];
      case 'TOGGLE_TODO' :
        return state.map(todo => {
          if (action.id !== todo.id) {
            return todo;
          }
          return {
            ...todo,
            completed : !todo.completed
          };
        });
    default:
      return state;
  }
}

const todoApp = combineReducers ({
  todos,
  visibilityFilter
});



const testToggleTodo = () => {
  const before = [{
    completed: false,
    id: 0,
    text: "foo"
  },{
    completed: false,
    id: 1,
    text: "bar"

  }];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };

  const after = [{
    completed: false,
    id: 0,
    text: "foo"
  },{
    completed: true,
    id: 1,
    text: "bar"

  }];


  deepFreeze(before);
  deepFreeze(action);

  expect (
    todos(before, action)
    )
    .toEqual(after);
};

testToggleTodo();



const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    // const liStyle =
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>
          AddTodo
          </button>
          <ul>
            {this.props.todos.map(todo =>
              <li
                style={
                  {
      textDecoration: (todo.completed) ? 'line-through' : ''
    }
                }
                key={todo.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  })
                }}
              >
              {todo.text}
              </li>
              )}
          </ul>
      </div>
      );
  }
}



const render = () => {
  ReactDOM.render(
    <TodoApp
      todos= {store.getState().todos}

    />,
  document.getElementById('root')
    );


};



store.subscribe(render);

render();

// --------test

const testTodos = () => {
  const before = [];

  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'learn'
    
  }

  const after = [
  {
    id: 0,
    text: 'learn',
    completed: false
  }];

  deepFreeze(before);
  deepFreeze(action);

  expect (
    todos(before, action)
    )
    .toEqual(after);
};

testTodos();





