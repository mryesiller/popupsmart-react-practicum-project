import React, { Fragment } from "react"
import { authStore } from "../context/authContext"

const Navbar = () => {
  const user = authStore((state) => state.user)
  const logout = authStore((state) => state.logout)

  const handleLogout = () => {
    logout()
  }
  return (
    <Fragment>
      <h3>Popupsmart TodoApp</h3>
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
