
export default function (state, action) {
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
    default:
      return state
  }
}
