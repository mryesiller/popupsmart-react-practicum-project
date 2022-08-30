import React, { useState } from "react"
import { eventStore } from "../context/eventContext"

const ToggleButton = () => {
  const { darkmode } = eventStore()

  return (
    <div>
      <label>
        <input
          className="toggle-checkbox"
          type="checkbox"
          value={darkmode}
          onChange={() => {
            eventStore.setState({ darkmode: !darkmode })
            if (darkmode) {
              document.body.classList.add("dark__mode")
            } else {
              document.body.classList.remove("dark__mode")
            }
          }}
        ></input>
        <div className="toggle-slot">
          <div className="sun-icon-wrapper"></div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper"></div>
        </div>
      </label>
    </div>
  )
}

export default ToggleButton
