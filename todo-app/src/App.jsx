import React from 'react'
import { useState } from 'react'
import {Title} from './components/Title/Title'
import {ToDo} from './components/Todo/Todo'
import {ToDoInput} from './components/TodoInput/ToDoInput'
import {ToDoList} from './components/TodoList/ToDoList'


const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Watch the next Marvel Movie",
      completed: false,
    },
    {
      id: 2,
      title: "Record the next Video",
      completed: false,
    },
    {
      id: 3,
      title: "Wash the dishes",
      completed: false,
    },
    {
      id: 4,
      title: "Study 2 hours",
      completed: false,
    },
  ])


  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full w-full font-inter text-gray-100 flex items-center justify-center py-20 px-5 ">
      <div className='container flex flex-col max-w-xl'>
        <Title/>
        <ToDoInput addTodo={addTodo} />
        <ToDoList todos={todos} />
         
      </div>
    </div>
  )
}

export default App
