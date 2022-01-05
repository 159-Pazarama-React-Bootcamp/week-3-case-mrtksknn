import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'

const Register = () => {
  const [form, setForm] = useState({ userName: '', password: '' })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div className="Login">
      <div className="container">
        <div className="form">
          <div className="form-input">
            <img src="./assets/logo.png" alt="logo" />
            <p className="header">Register</p>
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
            <button className="sign" style={{ marginTop: '0' }}>
              <a
                href="https://mertkeskin-portfolio.vercel.app/"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                Register
              </a>
            </button>
            <p className="link-menu">or continue with</p>
            <div className="link-button">
              <button>
                <img src="./assets/bi-google.png" />
              </button>
              <button>
                <img src="./assets/bi-github.png" />
              </button>
              <button>
                <img src="./assets/bi_facebook.jpg" />
              </button>
            </div>
          </div>
        </div>
        <div className="avatar">
          <img src="./assets/my-avatar.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Register
