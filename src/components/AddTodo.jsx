import React, { useState } from "react"
import { eventStore } from "../context/eventContext"

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("")
  const { modalStatusAddTodo, backdropStatus } = eventStore()

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
    addTodo(todo)
  }

  return (
    <aside
      className={
        modalStatusAddTodo ? "modal__container" : "modal__container disabled"
      }
    >
      <h3>Add Todo</h3>
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
              eventStore.setState({ modalStatusAddTodo: !modalStatusAddTodo })
              eventStore.setState({ backdropStatus: !backdropStatus })
              setText()
            }}
            className="btn btn-p-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--success">
            Add Todo
          </button>
        </div>
      </form>
    </aside>
  )
}

export default AddTodo
