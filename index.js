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

const todo = (state = {} , action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
      case 'TOGGLE_TODO' :
        if (action.id !== state.id) {
          return state;
        }
        return {
          ...state,
          completed : !state.completed
        };

    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return [...state, todo(undefined, action)];
      case 'TOGGLE_TODO' :
        return state.map(t => { return todo(t, action)});
    default:
      return state;
  }
}

const todoApp = combineReducers ({
  todos,
  visibilityFilter
});


const Todo = ({
    onClick,
    completed,
    text
  }) => (
    <li
    style={
      {
    textDecoration: (completed) ? 'line-through' : '',
  }
    }
    onClick={onClick}
  >
  {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
    <Todo
      key={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)}
      />

      )}
  </ul>
)

const AddTodo = ({
  onClick
}) => {
  let input;

return (
<div>
    <input ref={node => {
    input = node;
  }} />
  <button onClick={() => {
    onClick(input);
    input.value = '';
  }}>
    AddTodo
    </button>
</div>
)
}

const Footer = (() => {
return (
          <div>
          <FilterLink children='Show All' filter='SHOW_ALL'  />
          <br />
          <FilterLink children='Show in progress' filter='SHOW_IN_PROGRESS'/>
          <br />
          <FilterLink children='Show completed' filter='SHOW_COMPLETED'/>
          </div>
  )
});

class FilterLink extends Component {
  render () {
    const props = this.props;
    const state = store.getState();
    return (
      <Link
        active= {
          props.filter ===
          state.visibilityFilter
        }
        onClick= {() => 
          store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter
        })
        }
        >
        {props.children}
</Link>
        );
  }
}

const Link = ({
  active,
  children,
  onClick,
}) => {
  if (active) {
    return <span>{children}</span>;
  }

return (
  <a
    href="#"
    onClick={ (e) => {
      e.preventDefault();
      onClick();
    }}
  >{children}</a>
)};

const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    const visibleTodos = this.props.todos.filter(todo => {
      return ((!todo.completed && this.props.visibilityFilter!=='SHOW_COMPLETED') || (todo.completed && this.props.visibilityFilter!=='SHOW_IN_PROGRESS'))
    });

    return (
      <div>
      <AddTodo
      onClick= { (input) =>
    store.dispatch({
      type: 'ADD_TODO',
      text: input.value,
      id: nextTodoId++
    })}/>
          <TodoList
            todos = {visibleTodos}
            onTodoClick = { (id) => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: id
              })
            }}
            />
            <Footer />

      </div>
      );
  }
}






const render = () => {
  ReactDOM.render(
    <TodoApp
      todos= {store.getState().todos}
      visibilityFilter = {store.getState().visibilityFilter}

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



