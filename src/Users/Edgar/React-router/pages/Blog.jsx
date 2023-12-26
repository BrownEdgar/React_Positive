import React from 'react'

export default function Blog({ users }) {
  return (
    <div>
      <h1>users page</h1>
      {users.map((user, index) => {
        return <p key={index}>{user}</p>
      })}
    </div>
  )
}
