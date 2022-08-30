import create from "zustand"

export const authStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  loginUser: async (username) => {
    set({ isLoading: true })
    try {
      localStorage.setItem("user", { username: username })
      set({ user: { username: username } })
      set({ isLoading: false })
    } catch (error) {
      set({ error: error })
    }
  },
  logout: () => {
    localStorage.removeItem("user")
    set({ user: null })
  },
}))
