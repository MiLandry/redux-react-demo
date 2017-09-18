import React from 'react'
import FilterLink from '../components/FilterLink'

export default class FilterLinks extends React.Component {


  render() {
    const { store } = this.context
    const changeFilter = (filter) =>{
      store.dispatch( {
        type: 'CHANGE_VISIBILITY_FILTER',
        filter: filter
      })
    }
    return (
      <div>
        <FilterLink 
          onClick={() => {
            changeFilter('SHOW_ALL')
          }}
          text="show all"
        />
        <br />
        <FilterLink 
          onClick={() => {
            changeFilter('SHOW_COMPLETED')
          }}
          text="show completed"
        />
        <br />
        <FilterLink 
          onClick={() => {
            changeFilter('SHOW_IN_PROGRESS')
          }}
          text="show in progress"
        />
      </div>
    )
  }
}

FilterLinks.contextTypes = {
  store: React.PropTypes.object
}


