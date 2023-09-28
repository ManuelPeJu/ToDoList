import React from 'react'

const ToDoList = ({ children }) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden  shadow-2xl'>
        {children}
    </div>
  )
}

export default ToDoList