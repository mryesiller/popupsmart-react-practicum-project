import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { eventStore } from "../../context/eventContext"

import { Navbar, ToggleButton } from "../../components"

const Layout = () => {
  const { backdropStatus } = eventStore()

  return (
    <Fragment>
      <div
        className={
          backdropStatus
            ? "backdrop__container"
            : "backdrop__container disabled"
        }
      ></div>
      <header>
        <Navbar />
      </header>
      <main className="main__content">
        <Outlet />
      </main>
      <footer>
        <h4>@MrYesiller</h4>
        <ToggleButton />
      </footer>
    </Fragment>
  )
}

export default Layout
