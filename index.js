import ReactDOM from 'react-dom'
import { createStore } from 'Redux'
import todoApp from 'reducers/todoApp'

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
