import React from 'react'

const FilterLink = ({filter, text, currentFilter, onClick}) => {
  if (filter === currentFilter) {
    return (<span> {filter} </span>)
  }

  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault()
        onClick(filter)
      }}
    >
      {text}
    </a>
  )
}


export default FilterLink