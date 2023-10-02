import React from 'react'
import { ToDo } from '../Todo/Todo'
import {ToDoFilters} from '../TodoFilters/ToDoFilters'

const ToDoList = ({ todos, handleSetComplete, handleDelete }) => {

  // console.log(todos)
  // console.log(handleSetComplete)

  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden  shadow-2xl'>
        {todos.map( todo => {
          return (
            <ToDo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
          )
        })}
        <ToDoFilters />
    </div>
  )
}

export { ToDoList }