import './CreateTodoButton.css'
import React from 'react'
import PlusIcon from '../assets/plusicon.png'

function CreateTodoButton({ setOpenModal, openModal }) {
  return (
    <img
      src={PlusIcon}
      alt=""
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state)
      }}
    />
  )
}

export { CreateTodoButton }
