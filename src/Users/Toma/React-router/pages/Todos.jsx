import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './todos.css'

export default function Todos() {
const [todos, setTodos] = useState([]);

 useEffect(() => {
axios({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    url: 'todos',
    params: {_limit: 5}
}).then(res=>setTodos(res.data))
  },[])
 
  return (
    <div>
      <pre>
        {JSON.stringify(todos, null, 1)}
      </pre>
    </div>
  )
}

