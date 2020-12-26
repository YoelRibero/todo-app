import React from 'react'
// REDUX
import { connect } from 'react-redux'
import { setFilter } from '../../redux/actions'
// ClassN_ames Plugin
import addClass from 'classnames'
// Styles
import { FilerContainer } from './styles'
// Array Filters
const filters = ['all', 'active', 'completed']

const FilterTodo = ({ darkTheme, filterState, setFilter }) => (
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
// Send filter state of redux to component
const mapStateToProps = state => {
  return {
    filterState: state.filter
  }
}
// Send action setFilter to component 
const mapDispatchToProps = {
  setFilter
}
// Connect with redux
export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)