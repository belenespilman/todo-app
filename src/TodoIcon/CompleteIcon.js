import React from 'react'
import { TodoIcon } from './'

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#a6f2e8' : 'white'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon }
