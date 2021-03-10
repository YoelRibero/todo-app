export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, content } = action.payload
      return {
        ...state,
        allTodos: [
          ...state.allTodos,
          {
            id: id,
            content: content,
            completed: false
          }
        ]
      }
    }
    case 'TOGGLE_TODO': {
      const { id } = action.payload
      const todo = state.allTodos.find(todo => todo.id === id)
      todo.completed = !todo.completed
      return {
        ...state,
        allTodos: [
          ...state.allTodos
        ]
      }
    }
    case 'SET_ORDER_TODO': {
      const { todos } = action.payload
      return {
        ...state,
        allTodos: todos
      }
    }
    case 'DELETE_TODO': {
      const { id } = action.payload
      return {
        ...state,
        allTodos: state.allTodos.filter(todo => todo.id !== id)
      }
    }
    case 'SET_FILTER': {
      const { filter } = action.payload
      return {
        ...state,
        filter: filter
      }
    }
    case 'CLEAR_COMPLETE': {
      return {
        ...state,
        allTodos: state.allTodos.filter(todo => !todo.completed)
      }
    }
    case 'CHANGE_THEME': {
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    }
    default:
      return state
  }
}
