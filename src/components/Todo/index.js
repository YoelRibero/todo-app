import React, { useState } from 'react'
// REDUX
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../../redux/actions'
// ClassNames Plugin
import addClass from 'classnames'
// Styles
import { TodoContainer, CheckboxFalse } from './styles'
// Images
import iconChecked from '../../../assets/images/icon-check.svg'
import iconDelete from '../../../assets/images/icon-cross.svg'

const Todo = ({ title, complete, id, darkTheme, addTodo, toggleTodo, deleteTodo }) => {
  // Set State of input value
  const [input, setInput] = useState('')
  // Handle add Todo to the list
  const handleTodo = (e) => {
    e.preventDefault()
    input.length > 0 &&
      addTodo(input)
      setInput('')
  }
  // Handle toggle todo, completed or incompleted
  const handleClick = (e, id) => {
    e.target.alt !== 'Icon Delete' && toggleTodo(id)
  }
  // Handle delete todo of the list
  const handleDelete = id => {
    deleteTodo(id)
  }
  return (
    <TodoContainer 
      darkTheme={darkTheme}
      onSubmit={handleTodo}
      onClick={e => title && handleClick(e, id)}
      className={addClass(complete && 'complete', title && 'with-title', darkTheme && 'darkTheme')}
    >
      <CheckboxFalse darkTheme={darkTheme}>
        {
          complete && <img src={iconChecked} alt="Icon Check"/>
        }
      </CheckboxFalse>
      <input
        type="text"
        placeholder={title === undefined ? 'Create a new todo...' : ''} 
        value={title ? title : input}
        onChange={e => setInput(e.target.value)}
      />
      {
        title &&
          <img 
            src={iconDelete} 
            alt="Icon Delete"
            onClick={() => handleDelete(id)}
          />
      }
    </TodoContainer>
  )
}

// Send state to component
const mapStateToProps = state => {
  return {
    darkTheme: state.darkTheme
  }
}
// Send actions to handle addTodo, toggleTodo and deleteTodo
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo
}
// Connection to redux
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
