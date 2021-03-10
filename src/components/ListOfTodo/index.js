import React from 'react'
// REDUX
import { connect } from 'react-redux'
import { clearComplete, setOrderTodo } from '../../redux/actions'
import { getTodos } from '../../redux/filters'
// Component
import Todo from '../Todo'
// Styles
import { ContainerListOfTodo, ContainerListFooter } from './styles'
// Plugin for Drag and Drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const ListOfTodo = ({ darkTheme, todos, allTodos, filter, clearComplete, setOrderTodo }) => {
  // Set Todos on localStorage
  window.localStorage.setItem('allTodos', JSON.stringify(allTodos))
  // Array with incompleted todos
  const itemsLeft = todos.filter((todo) => !todo.completed)
  // Handle drag and drop mode
  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setOrderTodo(items)
  }
  return (
    <ContainerListOfTodo>
      {
        filter === 'all'
          ?
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='todos'>
                {(provided) => (
                  <ul
                    className='todos'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {todos.map((todo, index) => (
                      <Draggable key={todo.id} draggableId={todo.id} index={index}>
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Todo
                              title={todo.content}
                              complete={todo.completed}
                              id={todo.id}
                            />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          :
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
        <span onClick={() => clearComplete()}>Clear Completed</span>
      </ContainerListFooter>
    </ContainerListOfTodo>
  )
}

// Send state allTodos to component. Logic to know todos to render
const mapStateToProps = state => {
  const { filter, allTodos, darkTheme } = state
  const todos = getTodos(filter, allTodos)
  return {
    todos: todos,
    allTodos: allTodos,
    darkTheme: darkTheme,
    filter: filter
  }
}

// Send action clarComplete to clear completed and setOrderTodo for set order list of Todos
const mapDispatchToProps = {
  clearComplete,
  setOrderTodo
}

// Connection with redux
export default connect(mapStateToProps, mapDispatchToProps)(ListOfTodo)
