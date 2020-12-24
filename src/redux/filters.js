export const getTodos = (filter, todos) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    case 'all':
      return todos
  }
}