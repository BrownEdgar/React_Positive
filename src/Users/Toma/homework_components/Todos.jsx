
import React, { useState, useEffect } from 'react'
import axios from './axios'


export default function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios('todos?_limit=20').then(res => setTodos(res.data))
    })

  return (
    <div className='App-cont'>
        <h2>Todos</h2>
        <ul className='Todos'>
            {
                todos.map(elem=>{
                    return (
                        <li key={elem.id}>{elem.title}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
