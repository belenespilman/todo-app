import React from 'react'
import { TodoIcon } from './'

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="#605870"
      className="delete-icon"
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }
