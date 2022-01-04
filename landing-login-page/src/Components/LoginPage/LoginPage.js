import React, { useState } from 'react'
import './LoginPage.css'
import Input from '../Input/Input'

const LoginPage = () => {
  const [form, setForm] = useState({ userName: '', password: '' })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div className="Login">
      <div className="container">
        <div className="form">
          <img src="./assets/logo.png" alt="logo" />
          <p className="header">Login</p>
          <Input
            type="email"
            placeholder="username@gmail.com"
            name="Email"
            value={form.userName}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="Password"
            value={form.password}
            onChange={handleChange}
          />
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
