import { connect } from 'react-redux'
import { toggleTodo } from '/src/actions'
import TodoList from '/src/components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos
  case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed)
  }
}

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList)