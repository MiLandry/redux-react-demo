import ReactDOM from 'react-dom'
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './src/reducers/todoApp'
import App from './src/components/App'

const store = createStore(todoApp)

const render = () => {

  ReactDOM.render(
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>

    ,
    document.getElementById('root')
  )
}

store.subscribe(render)

render()
