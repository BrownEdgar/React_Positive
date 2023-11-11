import React, { useState } from 'react'

export default function About({ setUsers }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevusers) => {
      return [...prevusers, e.target[0].value]
    })
  }
  return (
    <div>
      <h1>About page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' />
      </form>
    </div>
  )
}
