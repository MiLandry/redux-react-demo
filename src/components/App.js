import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterLinks from '../containers/FilterLinks';

export default class App extends React.Component {

  render() {
    const { store } = this.context;
    let nextTodoId = 1;
    return (
      <div>
        <AddTodo
          onAddClick={ text => {
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text
            });
          }}
        />
        <h1>My Todo List</h1>
        <FilterLinks />
        <TodoList />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};