import React from 'react'
import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <React.Fragment>
        <div className="update-container">
          <div className="update-modal">
            <p className="update-alert">Your TODO list is outdated</p>
            <button className="reload-button" onClick={() => toggleShow(false)}>
              Refresh
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
