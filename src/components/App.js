import React from 'react'
import AddTodo from 'components/AddTodo'
import VisbilityTodoList from 'containers/VisibilityTodoList'
import Footer from 'components/Footer'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'


const App = () => (
  <Router>
  <div>
    
    <Link to='/todo' >Todo </Link>
    <Route path='/todo' render={() => (
      <div>
        <AddTodo />
        <VisbilityTodoList />
        <Footer />
        <Link to='www.google.com' >hello</Link>
      </div>
    )} />
  </div>
  </Router>
)

export default App
