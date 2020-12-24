import React from 'react'
import ReactDOM from 'react-dom'

// REDUX
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import todos from './redux/reducers/todos'

// import { initialState } from './utils/initialState'
import { App } from './App'

const allTodos = JSON.parse(window.localStorage.getItem('allTodos')) 
  ? JSON.parse(window.localStorage.getItem('allTodos')) 
  : []

const initialState = {
  allTodos: allTodos,
  filter: 'all'
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(todos, initialState, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)
