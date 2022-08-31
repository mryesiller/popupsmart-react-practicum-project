import React, { Fragment } from "react"
import { authStore } from "../context/authContext"
import ToggleButton from "./ToggleButton"

const Navbar = () => {
  const user = authStore((state) => state.user)
  const logout = authStore((state) => state.logout)

  const handleLogout = () => {
    logout()
  }
  return (
    <Fragment>
      <h3>
        Popupsmart TodoApp
        <div className="toggle__navbar">
          <ToggleButton />
        </div>
      </h3>

      <nav>
        {user && (
          <ul>
            <li>
              <p>Hello! {user.username}</p>
            </li>
            <li>
              <a type="button" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        )}
      </nav>
    </Fragment>
  )
}

export default Navbar
