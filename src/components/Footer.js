import React from 'react'

const Footer = (visibilityFilter, onFilterClick) => (
  <p>
    show: 
    <div>
      <FilterLink
        filter='SHOW_ALL'
        onClick={onFilterClick}
        text="show all"
        currentFilter={visibilityFilter}
      />
      <br />
      <FilterLink
        filter='SHOW_COMPLETED'
        text="show completed"
        onClick={onFilterClick}
        currentFilter={visibilityFilter}
      />
      <br />
      <FilterLink
        filter='SHOW_IN_PROGRESS'
        text="show in progress"
        onClick={onFilterClick}
        currentFilter={visibilityFilter}
      />
    </div>
  </p>

)


export default Footer
