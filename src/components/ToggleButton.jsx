import React from "react"
import { eventStore } from "../context/eventContext"

const ToggleButton = () => {
  const { darkmode } = eventStore()

  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        value={darkmode}
        onChange={() => {
          if (darkmode) {
            document.body.classList.add("dark__mode")
          } else {
            document.body.classList.remove("dark__mode")
          }
          eventStore.setState({ darkmode: !darkmode })
        }}
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        {darkmode ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  )
}

export default ToggleButton
