import React from 'react'

export default function Todos({ todos }) {
  return (
    <ul>
        {
            todos.map(elem => {
                return <li key={elem.id}>
                    <span>{elem.id}</span>
                    <p>{elem.title}</p>
                </li>
            })
        }
    </ul>
  )
}
