import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  return (
    <div className="todo-search-main-container">
      <div className="todo-search-container">
        <input
          placeholder="Search your tasks"
          className="TodoSearch"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
        />
      </div>
    </div>
  )
}

export { TodoSearch }
