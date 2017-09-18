import React from 'react'

const Todo = ({ onClick, completed, text}) => (
  <li
    style={{ textDecoration: (completed) ? 'line-through' : '',}}
    onClick={onClick}
  >
    {text}
  </li>
)


export default Todo
