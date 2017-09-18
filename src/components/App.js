import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

function getVisibleTodos() {
  return []
}

let nextTodoId = 1

const App = ({todos, visibilityFilter}) => (
  <div>
    <h1>My Todo List</h1>
    <AddTodo
      onAddClick={ text => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text
        })
      }}
    />
    <TodoList
      todos={getVisibleTodos(
        todos, visibilityFilter)}
    />
    <Footer
      visibilityFilter
      onFilterClick={filter => {
        store.dispatch({
          type: 'CHANGE_VISIBILITY_FILTER',
          filter
        })
      }}
    />
  </div>
)

export default App
