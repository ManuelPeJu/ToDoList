import React from 'react'
import Title from './components/Title/Title'
import ToDoInput from './components/TodoInput/ToDoInput'


const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen h-full w-full  text-gray-100 flex items-center justify-center py-20 px-5 ">
      <div className='container flex flex-col max-w-xl'>
        <Title/>
        <ToDoInput />
      </div>
    </div>
  )
}

export default App
