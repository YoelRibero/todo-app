import React from 'react'
// REDUX
import { connect } from 'react-redux'
import { clearComplete } from '../../redux/actions'
import { getTodos } from '../../redux/filters'

import Todo from '../Todo'

import { ContainerListOfTodo, ContainerListFooter } from './styles'

const ListOfTodo = ({ darkTheme, todos, allTodos, clearComplete }) => {
  window.localStorage.setItem('allTodos', JSON.stringify(allTodos))
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

const mapStateToProps = state => {
  const { filter, allTodos } = state
  const todos = getTodos(filter, allTodos)
  return {
    todos: todos,
    allTodos: allTodos
  }
}

const mapDispatchToProps = {
  clearComplete
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTodo)
