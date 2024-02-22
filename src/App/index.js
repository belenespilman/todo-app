import React from 'react'
import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { EmptySearchResults } from '../EmptySearchResults'
import { ChangeAlertWithStorageListener } from '../ChangeAlert'

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    reopenTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    syncTodos,
    todos,
  } = useTodos()

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          // loading={loading}
        />
      </TodoHeader>

      <div className="main-content-wrapper">
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchValue={searchValue}
          totalTodos={totalTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(value) => <EmptySearchResults value={value} />}
        >
          {(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onReopen={() => reopenTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>

        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />

        {openModal && (
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
              todos={todos}
            />
          </Modal>
        )}
      </div>

      <ChangeAlertWithStorageListener sync={syncTodos} />
    </>
  )
}

export default App
