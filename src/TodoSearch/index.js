import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <div className="todo-search-main-container">
      <div className="todo-search-container">
        <input
          placeholder="🔍 Search your tasks"
          className="TodoSearch"
          value={searchValue}
          disabled={loading}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
        />
      </div>
    </div>
  )
}

export { TodoSearch }
