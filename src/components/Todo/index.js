import React, { useState } from 'react'

// REDUX
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../../redux/actions'

import addClass from 'classnames'

import { TodoContainer, CheckboxFalse } from './styles'

import iconChecked from '../../../assets/images/icon-check.svg'
import iconDelete from '../../../assets/images/icon-cross.svg'

const Todo = ({ title, complete, id, darkTheme, addTodo, toggleTodo, deleteTodo }) => {
  const [input, setInput] = useState('')
  const handleTodo = () => {
    input.length > 0 &&
      addTodo(input)
      setInput('')
  }
  const handleClick = (e, id) => {
    e.target.alt !== 'Icon Delete' && toggleTodo(id)
  }
  const handleDelete = id => {
    deleteTodo(id)
  }
  return (
    <TodoContainer 
      darkTheme={darkTheme}
      onKeyPress={e => {
        e.which === 13 && handleTodo()
      }}
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

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo
}

export default connect(null, mapDispatchToProps)(Todo)
