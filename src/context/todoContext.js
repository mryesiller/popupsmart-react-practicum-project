import create from "zustand"

export const todoStore = create((set, get) => ({
  todos: [],
  todoID: null,
  isLoading: false,
  error: null,
  addNewTodo: async (newTodo) => {
    set({ isLoading: true })

    const response = await fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
    const json = await response.json()
    if (!response.ok) {
      set({ isLoading: false })
      set({ error: json.error })
    }
    if (response.ok) {
      get().getTodos()
      set({ isLoading: false })
      set({ error: null })
    }
  },
  deleteTodo: async (todoID) => {
    set({ isLoading: true })

    const response = await fetch(`/todos/${todoID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json()
    if (!response.ok) {
      set({ isLoading: false })
      set({ error: json.error })
    }
    if (response.ok) {
      set({ isLoading: false })
      set({ error: null })
      get().getTodos()
    }
  },
  getTodos: async () => {
    set({ isLoading: true })

    await fetch("/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        set({ isLoading: false })
        set({ error: null })
        set({ todos: result })
      })
      .catch((err) => {
        set({ isLoading: false })
        set({ error: err })
      })
  },
  completeTodo: async (todoID, completed) => {
    set({ isLoading: true })

    const response = await fetch(`/todos/${todoID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !completed }),
    })
    const json = await response.json()
    if (!response.ok) {
      set({ isLoading: false })
      set({ error: json.error })
    }
    if (response.ok) {
      set({ isLoading: false })
      set({ error: null })
    }
  },
  editTodo: async (text) => {
    set({ isLoading: true })

    await fetch(`/todos/${get().todoID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: text }),
    })
      .then((res) => res.json())
      .then((result) => {
        get().getTodos()
        set({ isLoading: false })
        set({ error: null })
      })
      .catch((err) => {
        set({ isLoading: false })
        set({ error: err })
      })
  },
  updateFilter: (filter) => {
    set((state) => ({
      filter,
    }))
  },
  clearCompletedTodos: () => {
    set((state) => ({
      todos: state.todos.filter((t) => !t.completed),
    }))
  },
}))