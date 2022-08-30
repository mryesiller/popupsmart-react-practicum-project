import create from "zustand"

export const eventStore = create((set) => ({
  darkmode: false,
  toggleDarkmode: () => {
    set((state) => ({
      darkmode: !state.darkmode,
    }))
  },
  modalStatusUpdateTodo: false,
  modalStatusAddTodo: false,
  backdropStatus: false,
}))
