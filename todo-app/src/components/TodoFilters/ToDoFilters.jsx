import React from 'react'
import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from "./ToDoFilters.components"


const ToDoFilters = () => {
  return (
    <FilterContainer>
        <ItemsLeft />
        <FilterButtonContainer>
          <FilterButton action={() => {}} filter="All" />
          <FilterButton action={() => {}} filter="Active" />
          <FilterButton action={() => {}} filter="Completed" />
        </FilterButtonContainer>

        <button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'>
          Clear Completed
        </button>
    </FilterContainer>
  )
}
 
export { ToDoFilters }