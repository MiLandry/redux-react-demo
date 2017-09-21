import React from 'react'
import AddTodo from 'components/AddTodo'
import VisbilityTodoList from 'containers/VisibilityTodoList'
import Footer from 'components/Footer'

const App = () => (
  <div>
    <AddTodo />
    <VisbilityTodoList />
    <Footer />
  </div>
)

export default App
