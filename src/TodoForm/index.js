import React from 'react'
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal, todos }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const [error, setError] = React.useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    const existingTodo = todos.filter((todo) => todo.text === newTodoValue)
    if (existingTodo.length > 0) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      addTodo(newTodoValue)
      setOpenModal(false)
    }
  }
  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new task</label>
      <textarea
        placeholder="Type something"
        value={newTodoValue}
        onChange={onChange}
      />
      <h1
        style={{ display: `${error ? 'block' : 'none'}` }}
        className="duplicated-error-message"
      >{`"${newTodoValue}" is already in the list.`}</h1>

      <div
        className="TodoForm-buttonContainer"
        style={{ marginTop: `${error ? '0px' : '28px'}` }}
      >
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
