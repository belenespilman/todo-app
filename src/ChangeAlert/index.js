import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <React.Fragment>
        <div>
          <p>hubo cambios</p>
          <button onClick={() => toggleShow(false)}>Reload</button>
        </div>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
