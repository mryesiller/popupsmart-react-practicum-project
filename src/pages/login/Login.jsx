import React, { useState } from "react"
import { authStore } from "../../context/authContext"

const Login = () => {
  const [username, setUsername] = useState("")
  const { loginUser, error, isLoading } = authStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = username.trim()
    loginUser(user)
  }

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h3>Login for Todo Dashboard</h3>
      <div className="form__group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  )
}

export default Login
