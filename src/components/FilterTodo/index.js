import React from 'react'
// REDUX
import { connect } from 'react-redux'
import { setFilter } from '../../redux/actions'

import addClass from 'classnames'

import { FilerContainer } from './styles'

const filters = ['all', 'active', 'completed']

const FilterTodo = ({ darkTheme, filterState, setFilter }) => {
  return (
    <FilerContainer darkTheme={darkTheme}>
      {
        filters.map(filter => (
          <span
            className={addClass(filter === filterState && 'active')}
            key={ filter }
            onClick={() => setFilter(filter)}
          >
            {filter}
          </span>
        ))
      }
    </FilerContainer>
  )
}

const mapStateToProps = state => {
  return {
    filterState: state.filter
  }
}

const mapDispatchToProps = {
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)