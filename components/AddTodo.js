import React from "react";
 
const AddTodo = ({ onAddClick }) => (
  let input;

  <div>
    <input ref={node => {input = node}} />
    <button onClick={onAddClick(input.value)}>Add Todo</button>
  </div>
);
 
export default AddTodo;
