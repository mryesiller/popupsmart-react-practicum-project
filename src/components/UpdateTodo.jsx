import React, { useState } from "react"
import { eventStore } from "../context/eventContext"

const UpdateTodo = ({ updateTodo }) => {
  const [text, setText] = useState("")
  const { modalStatusUpdateTodo, backdropStatus } = eventStore()

  const handleChangeValue = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fromData = new FormData(e.target)
    const todo = fromData.get("todo")

    if (todo.length < 3) {
      alert("Todo must be at least 3 characters long")
    }
    setText("")
    updateTodo(todo)
  }

  return (
    <aside
      className={
        modalStatusUpdateTodo ? "modal__container" : "modal__container disabled"
      }
    >
      <h3>Edit Todo</h3>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo"
          name="todo"
          value={text}
          onChange={handleChangeValue}
        />
        <div className="modal__buttons">
          <button
            type="button"
            onClick={() => {
              eventStore.setState({
                modalStatusUpdateTodo: !modalStatusUpdateTodo,
              })
              eventStore.setState({ backdropStatus: !backdropStatus })
            }}
            className="btn btn-p-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--success">
            Confirm
          </button>
        </div>
      </form>
    </aside>
  )
}

export default UpdateTodo