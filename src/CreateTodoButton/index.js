import './CreateTodoButton.css'
import React from 'react'

function CreateTodoButton({ setOpenModal, openModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state)
      }}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
