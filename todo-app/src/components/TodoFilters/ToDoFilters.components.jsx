import React from 'react'

const FilterContainer = ({ children }) => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
      {children}
    </div>
  )
}

const ItemsLeft = ({ total = 0 }) => {
    return (
        <p className='text-gray-400 text-sm'>
            {total} items left
        </p>
    )
}

export {FilterContainer, ItemsLeft};


//en este componente vamos a subdividir los filtros en pequeños componentes