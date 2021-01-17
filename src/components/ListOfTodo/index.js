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

const ListOfTodo = ({ darkTheme, todos, allTodos, clearComplete, setOrderTodo }) => {
  // Set Todos on localStorage
  window.localStorage.setItem('allTodos', JSON.stringify(allTodos))
  // Array with incompleted todos
  const itemsLeft = todos.filter((todo) => !todo.completed);
  // Handle drag and drop mode
  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    // Create array from todo for last drag and drop
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    // Set new order of todos on state
    setOrderTodo(items)
  }
  return (
    <ContainerListOfTodo>
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
      <ContainerListFooter darkTheme={darkTheme}>
        <span>{itemsLeft.length} items left</span>
        <span onClick={() => clearComplete()}>Clear Completed</span>
      </ContainerListFooter>
    </ContainerListOfTodo>
  );
}
// Send state allTodos to component. Logic to know todos to render
const mapStateToProps = state => {
  // Get filter, todos and darkTheme from state
  const { filter, allTodos, darkTheme } = state
  // Get todos according filter
  const todos = getTodos(filter, allTodos)
  return {
    todos: todos,
    allTodos: allTodos,
    darkTheme: darkTheme
  }
}
// Send action clarComplete to clear completed and setOrderTodo for set order list of Todos
const mapDispatchToProps = {
  clearComplete,
  setOrderTodo
}
// Connection with redux
export default connect(mapStateToProps, mapDispatchToProps)(ListOfTodo)
