import React from 'react'
import Title from './components/Title/Title'
import ToDo from './components/Todo/ToDo'
import ToDoInput from './components/TodoInput/ToDoInput'
import ToDoList from './components/TodoList/ToDoList'


const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen h-full w-full font-inter text-gray-100 flex items-center justify-center py-20 px-5 ">
      <div className='container flex flex-col max-w-xl'>
        <Title/>
        <ToDoInput />
        <ToDoList>
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
        </ToDoList>
      </div>
    </div>
  )
}

export default App
