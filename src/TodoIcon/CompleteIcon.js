import React from 'react'
import { TodoIcon } from './'

function CompleteIcon({ completed, onComplete, onReopen }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#a6f2e8' : 'white'}
      onClick={completed ? onReopen : onComplete}
    />
  )
}

export { CompleteIcon }
