import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'Redux'
import todoApp from 'reducers/todoApp'
import App from 'components/App'

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
