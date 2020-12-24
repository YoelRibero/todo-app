import { v4 as uuidv4 } from 'uuid'

export const addTodo = content => ({
  type: 'ADD_TODO',
  payload: {
    id: uuidv4(),
    content
  }
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id
  }
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  payload: {
    id
  }
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: {
    filter
  }
})

export const clearComplete = payload => ({
  type: 'CLEAR_COMPLETE',
  payload
})
