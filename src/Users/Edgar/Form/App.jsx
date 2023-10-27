import React, { useState } from 'react'

import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = e.target;
    const isEmailExist = users.some(user => user.email.toLowerCase() === email.value.toLowerCase());
    if (isEmailExist) {
      alert("user with this email is alredy exist")
    } else {
      const user = {
        id: Date.now(),
        email: email.value,
        username: username.value,
        password: password.value
      }
      setUsers([...users, user])
      e.target.reset()
    }
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="email" id='email' required />
        <label htmlFor="username">username</label>
        <input type="text" id='username' required />
        <label htmlFor="password">password</label>
        <input type="password" id='password' required />
        <input type="submit" value='add' />

      </form>

    </div>
  )
}
