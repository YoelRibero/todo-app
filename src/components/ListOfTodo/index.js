import React from 'react'
// REDUX
import { connect } from 'react-redux'
import { clearComplete } from '../../redux/actions'
import { getTodos } from '../../redux/filters'

import Todo from '../Todo'

import { ContainerListOfTodo, ContainerListFooter } from './styles'

const ListOfTodo = ({ darkTheme, todos, allTodos, clearComplete }) => {
  // Set Todos on localStorage
  window.localStorage.setItem('allTodos', JSON.stringify(allTodos))
  // Array with todos incompleted
  const itemsLeft = todos.filter(todo => !todo.completed)
  return (
    <ContainerListOfTodo>
      {
        todos.map(todo => (
          <Todo
            key = {todo.id}
            darkTheme = {darkTheme}
            title = {todo.content}
            complete = {todo.completed}
            id = {todo.id}
          />
        ))
      }
      <ContainerListFooter darkTheme={darkTheme}>
        <span>{itemsLeft.length} items left</span>
        <span
          onClick={() => clearComplete()}
        >
          Clear Completed
        </span>
      </ContainerListFooter>
    </ContainerListOfTodo>
  )
}
// Send state allTodos to component. Logic to know todos to render
const mapStateToProps = state => {
  // Get filter and todos from state
  const { filter, allTodos } = state
  // Get todos according filter
  const todos = getTodos(filter, allTodos)
  return {
    todos: todos,
    allTodos: allTodos
  }
}
// Send action clarComplete to clear completed
const mapDispatchToProps = {
  clearComplete
}
// Connection with redux
export default connect(mapStateToProps, mapDispatchToProps)(ListOfTodo)
