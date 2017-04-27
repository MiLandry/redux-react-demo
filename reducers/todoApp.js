import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';

export default const todoApp = combineReducers(
{
  todos,
  visibilityFilter
});

// const todoApp = (state = [], action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }

// export default todoApp;