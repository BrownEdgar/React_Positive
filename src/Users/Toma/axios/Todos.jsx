import React from 'react'

export default function Todos({todos, toggleTodo}) {
  return (
    <ul>
        {
            todos.map((elem,index) => {
                return <li key={elem.id} onClick={()=>toggleTodo(index)}>
                    <span className='list-id'>{elem.id}</span>
                    <span className={`completed ${elem.completed ? 'green' : 'red'}`}></span>
                    <p>{elem.title}</p>
                </li>
            })
        }

    </ul>
  )
}
