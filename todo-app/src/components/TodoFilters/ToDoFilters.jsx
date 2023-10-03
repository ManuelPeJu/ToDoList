import React from 'react'
import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from "./ToDoFilters.components"


const ToDoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
  return (
      <FilterContainer>
          <ItemsLeft total={total} />
          <FilterButtonContainer>
              <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All' />
              <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
              <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
          </FilterButtonContainer>

          <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
              Clear Completed
          </button>
      </FilterContainer>
  )
}

export { ToDoFilters }