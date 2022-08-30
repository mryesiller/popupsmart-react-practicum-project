import create from "zustand"

export const eventStore = create((set) => ({
  darkmode: false,
  modalStatusUpdateTodo: false,
  modalStatusAddTodo: false,
  backdropStatus: false,
}))
