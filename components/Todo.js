import React from "react";

const Todo = ({
    onClick,
    completed,
    text,
    id
  }) => (
    <li
    style={
      {
    textDecoration: (completed) ? 'line-through' : '',
  }
    }
    id={id}
    onClick={onClick}
  >
  {text}
  </li>
);


export default Todo;
