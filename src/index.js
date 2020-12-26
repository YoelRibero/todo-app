import React from 'react'
import ReactDOM from 'react-dom'
// REDUX
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { reducer } from './redux/reducers'
// Initial State
import { initialState } from './utils'
// App Component
import { App } from './App'

// Enabled Redux Developer Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)
